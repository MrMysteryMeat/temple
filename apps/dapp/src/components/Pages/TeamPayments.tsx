import React, {
  useEffect,
  useState,
  useReducer,
  useRef,
  SetStateAction,
} from 'react';
import styled from 'styled-components';

import { TempleTeamPayments__factory } from 'types/typechain';
import {
  TEAM_PAYMENTS_CONTINGENT_ADDRESSES_BY_EPOCH,
  TEAM_PAYMENTS_EPOCHS,
  TEAM_PAYMENTS_FIXED_ADDRESSES_BY_EPOCH,
  TEAM_PAYMENTS_TYPES,
} from 'enums/team-payment-type';
import { fromAtto } from 'utils/bigNumber';
import withWallet from 'hoc/withWallet';
import { useWallet } from 'providers/WalletProvider';

import Image from 'components/Image/Image';
import { Button } from 'components/Button/Button';
import { Flex } from 'components/Layout/Flex';
import { InputSelect } from 'components/InputSelect/InputSelect';
import eyeImage from 'assets/images/no-pupil-eye.png';

type ReducerState = {
  collectingFixed: boolean;
  collectingContingent: boolean;
  labelFixed: string;
  labelContingent: string;
};

type TeamPaymentsState = ReducerState & {
  allocationFixed: number;
  allocationContingent: number;
  claimableFixed: number;
  claimableContingent: number;
  remainingAllocationFixed: number;
  remainingAllocationContingent: number;
  setSelectedEpoch: React.Dispatch<SetStateAction<number>>;
  onCollectTeamFixedPayment(): void;
  onCollectTeamContingentPayment(): void;
};

type Action =
  | { type: 'default-fixed' }
  | { type: 'default-contingent' }
  | { type: 'collect-fixed' }
  | { type: 'collect-contingent' }
  | { type: 'success-fixed' }
  | { type: 'success-contingent' }
  | { type: 'failure-fixed' }
  | { type: 'failure-contingent' };

const reducerInitialState: ReducerState = {
  collectingFixed: false,
  collectingContingent: false,
  labelFixed: 'COLLECT $TEMPLE FOR IMPACT',
  labelContingent: 'COLLECT $TEMPLE FOR LONGEVITY',
};

const TeamPayments = () => {
  const {
    collectingFixed,
    collectingContingent,
    labelFixed,
    labelContingent,
    allocationFixed,
    allocationContingent,
    claimableFixed,
    claimableContingent,
    remainingAllocationFixed,
    remainingAllocationContingent,
    setSelectedEpoch,
    onCollectTeamFixedPayment,
    onCollectTeamContingentPayment,
  }: TeamPaymentsState = useTempleTeamPayments();

  const [cursorCoords, setCursorCoords] = useState([0, 0]);
  const imageRef = useRef<HTMLDivElement>(null);

  const pupilStyle = {
    transform: getPupilTransform(imageRef, cursorCoords),
  };

  const dropdownOptions = [
    { value: TEAM_PAYMENTS_EPOCHS.R1, label: 'Epoch 1' },
    { value: TEAM_PAYMENTS_EPOCHS.R2, label: 'Epoch 2' },
  ];

  return (
    <div onMouseMove={(e) => setCursorCoords([e.clientX, e.clientY])}>
      <Flex
        layout={{
          kind: 'container',
          direction: 'column',
          alignItems: 'center',
        }}
      >
        <Copy>
          <strong>Templar, you are seen.</strong>
          <br />
          <br />
          With each stone you lay the Temple stands taller.
          <br />
          <br />
          Now the Temple gives back to you.
        </Copy>

        <div ref={imageRef}>
          <EyeArea
            layout={{
              kind: 'container',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Image src={eyeImage} fillContainer />
            <Pupil style={pupilStyle} />
          </EyeArea>
        </div>

        <TotalAllocation
          title={`Total epoch allocation: ${
            allocationFixed + allocationContingent
          } $TEMPLE`}
        >
          Total epoch allocation:{' '}
          {(allocationFixed + allocationContingent).toLocaleString()} $TEMPLE
        </TotalAllocation>

        <ButtonArea>
          <CollectionValues
            layout={{
              kind: 'container',
              justifyContent: 'space-between',
            }}
          >
            <label title={`Collectable: ${claimableFixed} $TEMPLE`}>
              Collectable: {claimableFixed.toLocaleString()} $TEMPLE
            </label>
            <label title={`Vested: ${remainingAllocationFixed} $TEMPLE`}>
              Vested: {remainingAllocationFixed.toLocaleString()} $TEMPLE
            </label>
          </CollectionValues>
          <Button
            label={labelFixed}
            isUppercase
            disabled={collectingFixed || claimableFixed <= 0}
            onClick={() => onCollectTeamFixedPayment()}
          />

          <CollectionValues
            layout={{
              kind: 'container',
              justifyContent: 'space-between',
            }}
          >
            <label title={`Collectable: ${claimableContingent} $TEMPLE`}>
              Collectable: {claimableContingent.toLocaleString()} $TEMPLE
            </label>
            <label title={`Vested: ${remainingAllocationContingent} $TEMPLE`}>
              Vested: {remainingAllocationContingent.toLocaleString()} $TEMPLE
            </label>
          </CollectionValues>
          <Button
            label={labelContingent}
            isUppercase
            onClick={() => onCollectTeamContingentPayment()}
            disabled={collectingContingent || claimableContingent <= 0}
          />
        </ButtonArea>
        {TEAM_PAYMENTS_FIXED_ADDRESSES_BY_EPOCH[TEAM_PAYMENTS_EPOCHS.R2] && (
          <EpochDropdownContainer>
            <InputSelect
              options={dropdownOptions}
              defaultValue={dropdownOptions[0]}
              onChange={(e) => setSelectedEpoch(e.value)}
            ></InputSelect>
          </EpochDropdownContainer>
        )}
      </Flex>
    </div>
  );
};

function useTempleTeamPayments(): TeamPaymentsState {
  const { wallet, signer, collectTempleTeamPayment } = useWallet();

  const [state, dispatch] = useReducer(reducer, { ...reducerInitialState });

  const [selectedEpoch, setSelectedEpoch] = useState(TEAM_PAYMENTS_EPOCHS.R1);

  const [claimableFixed, setClaimableFixed] = useState(0);

  const [claimableContingent, setClaimableContingent] = useState(0);

  const [allocationFixed, setAllocationFixed] = useState(0);

  const [allocationContingent, setAllocationContingent] = useState(0);

  const [remainingAllocationFixed, setRemainingAllocationFixed] = useState(0);

  const [remainingAllocationContingent, setRemainingAllocationContingent] =
    useState(0);

  const [claimed, setClaimed] = useState(false);

  function reducer(state: ReducerState, action: Action): ReducerState {
    switch (action.type) {
      case 'default-fixed':
        return {
          ...state,
          collectingFixed: false,
          labelFixed: 'Collect $TEMPLE for impact',
        };
      case 'default-contingent':
        return {
          ...state,
          collectingContingent: false,
          labelContingent: 'Collect $TEMPLE for longevity',
        };
      case 'collect-fixed':
        return { ...state, collectingFixed: true, labelFixed: 'Collecting...' };
      case 'collect-contingent':
        return {
          ...state,
          collectingContingent: true,
          labelContingent: 'Collecting...',
        };
      case 'success-fixed':
        return {
          ...state,
          collectingFixed: false,
          labelFixed: 'Collected',
        };
      case 'success-contingent':
        return {
          ...state,
          collectingContingent: false,
          labelContingent: 'Collected',
        };
      case 'failure-fixed': {
        return {
          ...state,
          collectingFixed: false,
          labelFixed: 'Failed to collect',
        };
      }
      case 'failure-contingent': {
        return {
          ...state,
          collectingContingent: false,
          labelFixed: 'Failed to collect',
        };
      }
      default:
        return state;
    }
  }

  useEffect(() => {
    const getAllocationAndClaimableAmounts = async () => {
      if (wallet && signer) {
        // Get addresses based on selected epoch
        const fixedTeamPaymentAddress =
          TEAM_PAYMENTS_FIXED_ADDRESSES_BY_EPOCH[selectedEpoch];
        const contingentTeamPaymentAddress =
          TEAM_PAYMENTS_CONTINGENT_ADDRESSES_BY_EPOCH[selectedEpoch];

        // Retrieve fixed allocation & claimable amounts
        const fixedTeamPayments = new TempleTeamPayments__factory()
          .attach(fixedTeamPaymentAddress)
          .connect(signer);

        const fixedAllocation = await fixedTeamPayments.allocation(wallet);
        const fixedClaimedAmount = await fixedTeamPayments.claimed(wallet);
        const convertedFixedAlloc = fromAtto(fixedAllocation);
        setRemainingAllocationFixed(
          fromAtto(fixedAllocation.sub(fixedClaimedAmount))
        );

        setAllocationFixed(convertedFixedAlloc);

        if (convertedFixedAlloc > 0) {
          const fixedClaimable = await fixedTeamPayments.calculateClaimable(
            wallet
          );
          const convertedFixedClaimable = fromAtto(fixedClaimable);

          convertedFixedClaimable > 0 && dispatch({ type: 'default-fixed' });
          setClaimableFixed(convertedFixedClaimable);
        } else setClaimableFixed(0);

        // Retrieve contingent allocation and claimable amounts
        if (contingentTeamPaymentAddress) {
          const contingentTeamPayments = new TempleTeamPayments__factory()
            .attach(contingentTeamPaymentAddress)
            .connect(signer);

          const contingentAllocation = await contingentTeamPayments.allocation(
            wallet
          );
          const convertedContingentAlloc = fromAtto(contingentAllocation);
          const contingentClaimedAmount = await fixedTeamPayments.claimed(
            wallet
          );
          setRemainingAllocationContingent(
            fromAtto(contingentAllocation.sub(contingentClaimedAmount))
          );

          setAllocationContingent(convertedContingentAlloc);

          if (convertedContingentAlloc > 0) {
            const contingentClaimable =
              await contingentTeamPayments.calculateClaimable(wallet);
            const convertedContingentClaimable = fromAtto(contingentClaimable);

            setClaimableContingent(convertedContingentClaimable);

            convertedContingentClaimable > 0 &&
              dispatch({ type: 'default-contingent' });
          }
        } else {
          setClaimableContingent(0);
        }
      }
    };

    getAllocationAndClaimableAmounts();
  }, [claimed, selectedEpoch]);

  async function onCollectTeamFixedPayment() {
    dispatch({ type: 'collect-fixed' });

    const tx = await collectTempleTeamPayment(
      TEAM_PAYMENTS_TYPES.FIXED,
      selectedEpoch
    );

    if (tx) {
      setClaimed(!claimed);
      dispatch({ type: 'success-fixed' });
    } else {
      dispatch({ type: 'failure-fixed' });
      console.error('Could not claim');
    }
  }

  async function onCollectTeamContingentPayment() {
    dispatch({ type: 'collect-contingent' });

    const tx = await collectTempleTeamPayment(
      TEAM_PAYMENTS_TYPES.CONTINGENT,
      selectedEpoch
    );

    if (tx) {
      setClaimed(!claimed);
      dispatch({ type: 'success-contingent' });
    } else {
      dispatch({ type: 'failure-contingent' });
      console.error('Could not claim');
    }
  }

  return {
    collectingFixed: state.collectingFixed,
    labelFixed: state.labelFixed,
    collectingContingent: state.collectingContingent,
    labelContingent: state.labelContingent,
    claimableFixed,
    claimableContingent,
    remainingAllocationFixed,
    remainingAllocationContingent,
    allocationFixed,
    allocationContingent,
    setSelectedEpoch,
    onCollectTeamContingentPayment,
    onCollectTeamFixedPayment,
  };
}

function getPupilTransform(
  imageRef: React.RefObject<HTMLDivElement>,
  cursorCoords: number[]
) {
  const headerHeight = 80;

  if (imageRef.current) {
    const x = 0 - window.innerWidth / 2 + cursorCoords[0];
    const y =
      0 -
      window.innerHeight / 2 +
      imageRef.current.offsetTop +
      cursorCoords[1] -
      headerHeight;

    const values = normalizeTransform(x, y);
    return `translate(${values[0]}px, ${values[1]}px)`;
  }
}

function normalizeTransform(x: number, y: number) {
  if (Math.abs(x) + Math.abs(y) <= 10) {
    return [x, y];
  }

  const multipleOfLength = (Math.abs(x) + Math.abs(y)) / 10;

  return [x / multipleOfLength, y / multipleOfLength];
}

const Copy = styled.p`
  text-align: center;
  margin-bottom: 3rem;
`;

const ButtonArea = styled.div`
  width: 31.25rem;
  margin-top: 4rem;
`;

const CollectionValues = styled(Flex)`
  padding: 1rem;
  color: ${({ theme }) => theme.palette.brand};
`;

const EyeArea = styled(Flex)`
  width: 18.75rem;
  height: 18.75rem;
`;

const Pupil = styled.div`
  position: absolute;
  height: 1rem;
  width: 1rem;
  background-color: ${({ theme }) => theme.palette.brand};
  border-radius: 1rem;
`;

const TotalAllocation = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.palette.brand};
  font-size: 1.5rem;
  padding-top: 0.5rem;
`;

const EpochDropdownContainer = styled.div`
  position: absolute;
  right: 0;
  width: 12rem;
`;

export default withWallet(TeamPayments);