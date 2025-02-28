/*
 * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
 */
import {
  Governor,
  Governor_AdminChanged,
  Governor_BeaconUpgraded,
  Governor_Initialized,
  Governor_ManagerSet,
  Governor_ProposalCanceled,
  Governor_ProposalCreated,
  Governor_ProposalDeadlineUpdated,
  Governor_ProposalExecuted,
  Governor_ProposalQueued,
  Governor_ProposalThresholdSet,
  Governor_ProposalTypeUpdated,
  Governor_TimelockChange,
  Governor_Upgraded,
  Governor_VoteCast,
  Governor_VoteCastWithParams,
  Governor_VotingDelaySet,
  Governor_VotingPeriodSet,
} from "generated";

Governor.AdminChanged.handler(async ({ event, context }) => {
  const entity: Governor_AdminChanged = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    previousAdmin: event.params.previousAdmin,
    newAdmin: event.params.newAdmin,
  };

  context.Governor_AdminChanged.set(entity);
});

Governor.BeaconUpgraded.handler(async ({ event, context }) => {
  const entity: Governor_BeaconUpgraded = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    beacon: event.params.beacon,
  };

  context.Governor_BeaconUpgraded.set(entity);
});

Governor.Initialized.handler(async ({ event, context }) => {
  const entity: Governor_Initialized = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    version: event.params.version,
  };

  context.Governor_Initialized.set(entity);
});

Governor.ManagerSet.handler(async ({ event, context }) => {
  const entity: Governor_ManagerSet = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    oldManager: event.params.oldManager,
    newManager: event.params.newManager,
  };

  context.Governor_ManagerSet.set(entity);
});

Governor.ProposalCanceled.handler(async ({ event, context }) => {
  const entity: Governor_ProposalCanceled = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    proposalId: event.params.proposalId,
  };

  context.Governor_ProposalCanceled.set(entity);
});

Governor.ProposalCreated.handler(async ({ event, context }) => {
  const entity: Governor_ProposalCreated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    proposalId: event.params.proposalId,
    proposer: event.params.proposer,
    targets: event.params.targets,
    values: event.params.values,
    signatures: event.params.signatures,
    calldatas: event.params.calldatas,
    startBlock: event.params.startBlock,
    endBlock: event.params.endBlock,
    description: event.params.description,
  };

  context.Governor_ProposalCreated.set(entity);
});

Governor.ProposalDeadlineUpdated.handler(async ({ event, context }) => {
  const entity: Governor_ProposalDeadlineUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    proposalId: event.params.proposalId,
    deadline: event.params.deadline,
  };

  context.Governor_ProposalDeadlineUpdated.set(entity);
});

Governor.ProposalExecuted.handler(async ({ event, context }) => {
  const entity: Governor_ProposalExecuted = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    proposalId: event.params.proposalId,
  };

  context.Governor_ProposalExecuted.set(entity);
});

Governor.ProposalQueued.handler(async ({ event, context }) => {
  const entity: Governor_ProposalQueued = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    proposalId: event.params.proposalId,
    eta: event.params.eta,
  };

  context.Governor_ProposalQueued.set(entity);
});

Governor.ProposalThresholdSet.handler(async ({ event, context }) => {
  const entity: Governor_ProposalThresholdSet = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    oldProposalThreshold: event.params.oldProposalThreshold,
    newProposalThreshold: event.params.newProposalThreshold,
  };

  context.Governor_ProposalThresholdSet.set(entity);
});

Governor.ProposalTypeUpdated.handler(async ({ event, context }) => {
  const entity: Governor_ProposalTypeUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    proposalId: event.params.proposalId,
    proposalType: event.params.proposalType,
  };

  context.Governor_ProposalTypeUpdated.set(entity);
});

Governor.TimelockChange.handler(async ({ event, context }) => {
  const entity: Governor_TimelockChange = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    oldTimelock: event.params.oldTimelock,
    newTimelock: event.params.newTimelock,
  };

  context.Governor_TimelockChange.set(entity);
});

Governor.Upgraded.handler(async ({ event, context }) => {
  const entity: Governor_Upgraded = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    implementation: event.params.implementation,
  };

  context.Governor_Upgraded.set(entity);
});

Governor.VoteCast.handler(async ({ event, context }) => {
  const entity: Governor_VoteCast = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    voter: event.params.voter,
    proposalId: event.params.proposalId,
    support: event.params.support,
    weight: event.params.weight,
    reason: event.params.reason,
  };

  context.Governor_VoteCast.set(entity);
});

Governor.VoteCastWithParams.handler(async ({ event, context }) => {
  const entity: Governor_VoteCastWithParams = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    voter: event.params.voter,
    proposalId: event.params.proposalId,
    support: event.params.support,
    weight: event.params.weight,
    reason: event.params.reason,
    params: event.params.params,
  };

  context.Governor_VoteCastWithParams.set(entity);
});

Governor.VotingDelaySet.handler(async ({ event, context }) => {
  const entity: Governor_VotingDelaySet = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    oldVotingDelay: event.params.oldVotingDelay,
    newVotingDelay: event.params.newVotingDelay,
  };

  context.Governor_VotingDelaySet.set(entity);
});

Governor.VotingPeriodSet.handler(async ({ event, context }) => {
  const entity: Governor_VotingPeriodSet = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    oldVotingPeriod: event.params.oldVotingPeriod,
    newVotingPeriod: event.params.newVotingPeriod,
  };

  context.Governor_VotingPeriodSet.set(entity);
});
