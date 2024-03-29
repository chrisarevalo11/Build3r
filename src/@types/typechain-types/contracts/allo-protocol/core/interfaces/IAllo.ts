/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
	BaseContract,
	BigNumberish,
	BytesLike,
	FunctionFragment,
	Result,
	Interface,
	EventFragment,
	AddressLike,
	ContractRunner,
	ContractMethod,
	Listener
} from 'ethers'
import type {
	TypedContractEvent,
	TypedDeferredTopicFilter,
	TypedEventLog,
	TypedLogDescription,
	TypedListener,
	TypedContractMethod
} from '../../../../common'

export type MetadataStruct = { protocol: BigNumberish; pointer: string }

export type MetadataStructOutput = [protocol: bigint, pointer: string] & {
	protocol: bigint
	pointer: string
}

export declare namespace IAllo {
	export type PoolStruct = {
		profileId: BytesLike
		strategy: AddressLike
		token: AddressLike
		metadata: MetadataStruct
		managerRole: BytesLike
		adminRole: BytesLike
	}

	export type PoolStructOutput = [
		profileId: string,
		strategy: string,
		token: string,
		metadata: MetadataStructOutput,
		managerRole: string,
		adminRole: string
	] & {
		profileId: string
		strategy: string
		token: string
		metadata: MetadataStructOutput
		managerRole: string
		adminRole: string
	}
}

export interface IAlloInterface extends Interface {
	getFunction(
		nameOrSignature:
			| 'addPoolManager'
			| 'addToCloneableStrategies'
			| 'allocate'
			| 'batchAllocate'
			| 'batchRegisterRecipient'
			| 'distribute'
			| 'fundPool'
			| 'getBaseFee'
			| 'getFeeDenominator'
			| 'getPercentFee'
			| 'getPool'
			| 'getRegistry'
			| 'getStrategy'
			| 'getTreasury'
			| 'initialize'
			| 'isCloneableStrategy'
			| 'isPoolAdmin'
			| 'isPoolManager'
			| 'recoverFunds'
			| 'registerRecipient'
			| 'removeFromCloneableStrategies'
			| 'removePoolManager'
			| 'updateBaseFee'
			| 'updatePercentFee'
			| 'updatePoolMetadata'
			| 'updateRegistry'
			| 'updateTreasury'
	): FunctionFragment

	getEvent(
		nameOrSignatureOrTopic:
			| 'BaseFeePaid'
			| 'BaseFeeUpdated'
			| 'PercentFeeUpdated'
			| 'PoolCreated'
			| 'PoolFunded'
			| 'PoolMetadataUpdated'
			| 'RegistryUpdated'
			| 'StrategyApproved'
			| 'StrategyRemoved'
			| 'TreasuryUpdated'
	): EventFragment

	encodeFunctionData(
		functionFragment: 'addPoolManager',
		values: [BigNumberish, AddressLike]
	): string
	encodeFunctionData(
		functionFragment: 'addToCloneableStrategies',
		values: [AddressLike]
	): string
	encodeFunctionData(
		functionFragment: 'allocate',
		values: [BigNumberish, BytesLike]
	): string
	encodeFunctionData(
		functionFragment: 'batchAllocate',
		values: [BigNumberish[], BytesLike[]]
	): string
	encodeFunctionData(
		functionFragment: 'batchRegisterRecipient',
		values: [BigNumberish[], BytesLike[]]
	): string
	encodeFunctionData(
		functionFragment: 'distribute',
		values: [BigNumberish, AddressLike[], BytesLike]
	): string
	encodeFunctionData(
		functionFragment: 'fundPool',
		values: [BigNumberish, BigNumberish]
	): string
	encodeFunctionData(functionFragment: 'getBaseFee', values?: undefined): string
	encodeFunctionData(
		functionFragment: 'getFeeDenominator',
		values?: undefined
	): string
	encodeFunctionData(
		functionFragment: 'getPercentFee',
		values?: undefined
	): string
	encodeFunctionData(
		functionFragment: 'getPool',
		values: [BigNumberish]
	): string
	encodeFunctionData(
		functionFragment: 'getRegistry',
		values?: undefined
	): string
	encodeFunctionData(
		functionFragment: 'getStrategy',
		values: [BigNumberish]
	): string
	encodeFunctionData(
		functionFragment: 'getTreasury',
		values?: undefined
	): string
	encodeFunctionData(
		functionFragment: 'initialize',
		values: [AddressLike, AddressLike, AddressLike, BigNumberish, BigNumberish]
	): string
	encodeFunctionData(
		functionFragment: 'isCloneableStrategy',
		values: [AddressLike]
	): string
	encodeFunctionData(
		functionFragment: 'isPoolAdmin',
		values: [BigNumberish, AddressLike]
	): string
	encodeFunctionData(
		functionFragment: 'isPoolManager',
		values: [BigNumberish, AddressLike]
	): string
	encodeFunctionData(
		functionFragment: 'recoverFunds',
		values: [AddressLike, AddressLike]
	): string
	encodeFunctionData(
		functionFragment: 'registerRecipient',
		values: [BigNumberish, BytesLike]
	): string
	encodeFunctionData(
		functionFragment: 'removeFromCloneableStrategies',
		values: [AddressLike]
	): string
	encodeFunctionData(
		functionFragment: 'removePoolManager',
		values: [BigNumberish, AddressLike]
	): string
	encodeFunctionData(
		functionFragment: 'updateBaseFee',
		values: [BigNumberish]
	): string
	encodeFunctionData(
		functionFragment: 'updatePercentFee',
		values: [BigNumberish]
	): string
	encodeFunctionData(
		functionFragment: 'updatePoolMetadata',
		values: [BigNumberish, MetadataStruct]
	): string
	encodeFunctionData(
		functionFragment: 'updateRegistry',
		values: [AddressLike]
	): string
	encodeFunctionData(
		functionFragment: 'updateTreasury',
		values: [AddressLike]
	): string

	decodeFunctionResult(
		functionFragment: 'addPoolManager',
		data: BytesLike
	): Result
	decodeFunctionResult(
		functionFragment: 'addToCloneableStrategies',
		data: BytesLike
	): Result
	decodeFunctionResult(functionFragment: 'allocate', data: BytesLike): Result
	decodeFunctionResult(
		functionFragment: 'batchAllocate',
		data: BytesLike
	): Result
	decodeFunctionResult(
		functionFragment: 'batchRegisterRecipient',
		data: BytesLike
	): Result
	decodeFunctionResult(functionFragment: 'distribute', data: BytesLike): Result
	decodeFunctionResult(functionFragment: 'fundPool', data: BytesLike): Result
	decodeFunctionResult(functionFragment: 'getBaseFee', data: BytesLike): Result
	decodeFunctionResult(
		functionFragment: 'getFeeDenominator',
		data: BytesLike
	): Result
	decodeFunctionResult(
		functionFragment: 'getPercentFee',
		data: BytesLike
	): Result
	decodeFunctionResult(functionFragment: 'getPool', data: BytesLike): Result
	decodeFunctionResult(functionFragment: 'getRegistry', data: BytesLike): Result
	decodeFunctionResult(functionFragment: 'getStrategy', data: BytesLike): Result
	decodeFunctionResult(functionFragment: 'getTreasury', data: BytesLike): Result
	decodeFunctionResult(functionFragment: 'initialize', data: BytesLike): Result
	decodeFunctionResult(
		functionFragment: 'isCloneableStrategy',
		data: BytesLike
	): Result
	decodeFunctionResult(functionFragment: 'isPoolAdmin', data: BytesLike): Result
	decodeFunctionResult(
		functionFragment: 'isPoolManager',
		data: BytesLike
	): Result
	decodeFunctionResult(
		functionFragment: 'recoverFunds',
		data: BytesLike
	): Result
	decodeFunctionResult(
		functionFragment: 'registerRecipient',
		data: BytesLike
	): Result
	decodeFunctionResult(
		functionFragment: 'removeFromCloneableStrategies',
		data: BytesLike
	): Result
	decodeFunctionResult(
		functionFragment: 'removePoolManager',
		data: BytesLike
	): Result
	decodeFunctionResult(
		functionFragment: 'updateBaseFee',
		data: BytesLike
	): Result
	decodeFunctionResult(
		functionFragment: 'updatePercentFee',
		data: BytesLike
	): Result
	decodeFunctionResult(
		functionFragment: 'updatePoolMetadata',
		data: BytesLike
	): Result
	decodeFunctionResult(
		functionFragment: 'updateRegistry',
		data: BytesLike
	): Result
	decodeFunctionResult(
		functionFragment: 'updateTreasury',
		data: BytesLike
	): Result
}

export namespace BaseFeePaidEvent {
	export type InputTuple = [poolId: BigNumberish, amount: BigNumberish]
	export type OutputTuple = [poolId: bigint, amount: bigint]
	export interface OutputObject {
		poolId: bigint
		amount: bigint
	}
	export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>
	export type Filter = TypedDeferredTopicFilter<Event>
	export type Log = TypedEventLog<Event>
	export type LogDescription = TypedLogDescription<Event>
}

export namespace BaseFeeUpdatedEvent {
	export type InputTuple = [baseFee: BigNumberish]
	export type OutputTuple = [baseFee: bigint]
	export interface OutputObject {
		baseFee: bigint
	}
	export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>
	export type Filter = TypedDeferredTopicFilter<Event>
	export type Log = TypedEventLog<Event>
	export type LogDescription = TypedLogDescription<Event>
}

export namespace PercentFeeUpdatedEvent {
	export type InputTuple = [percentFee: BigNumberish]
	export type OutputTuple = [percentFee: bigint]
	export interface OutputObject {
		percentFee: bigint
	}
	export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>
	export type Filter = TypedDeferredTopicFilter<Event>
	export type Log = TypedEventLog<Event>
	export type LogDescription = TypedLogDescription<Event>
}

export namespace PoolCreatedEvent {
	export type InputTuple = [
		poolId: BigNumberish,
		profileId: BytesLike,
		strategy: AddressLike,
		token: AddressLike,
		amount: BigNumberish,
		metadata: MetadataStruct
	]
	export type OutputTuple = [
		poolId: bigint,
		profileId: string,
		strategy: string,
		token: string,
		amount: bigint,
		metadata: MetadataStructOutput
	]
	export interface OutputObject {
		poolId: bigint
		profileId: string
		strategy: string
		token: string
		amount: bigint
		metadata: MetadataStructOutput
	}
	export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>
	export type Filter = TypedDeferredTopicFilter<Event>
	export type Log = TypedEventLog<Event>
	export type LogDescription = TypedLogDescription<Event>
}

export namespace PoolFundedEvent {
	export type InputTuple = [
		poolId: BigNumberish,
		amount: BigNumberish,
		fee: BigNumberish
	]
	export type OutputTuple = [poolId: bigint, amount: bigint, fee: bigint]
	export interface OutputObject {
		poolId: bigint
		amount: bigint
		fee: bigint
	}
	export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>
	export type Filter = TypedDeferredTopicFilter<Event>
	export type Log = TypedEventLog<Event>
	export type LogDescription = TypedLogDescription<Event>
}

export namespace PoolMetadataUpdatedEvent {
	export type InputTuple = [poolId: BigNumberish, metadata: MetadataStruct]
	export type OutputTuple = [poolId: bigint, metadata: MetadataStructOutput]
	export interface OutputObject {
		poolId: bigint
		metadata: MetadataStructOutput
	}
	export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>
	export type Filter = TypedDeferredTopicFilter<Event>
	export type Log = TypedEventLog<Event>
	export type LogDescription = TypedLogDescription<Event>
}

export namespace RegistryUpdatedEvent {
	export type InputTuple = [registry: AddressLike]
	export type OutputTuple = [registry: string]
	export interface OutputObject {
		registry: string
	}
	export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>
	export type Filter = TypedDeferredTopicFilter<Event>
	export type Log = TypedEventLog<Event>
	export type LogDescription = TypedLogDescription<Event>
}

export namespace StrategyApprovedEvent {
	export type InputTuple = [strategy: AddressLike]
	export type OutputTuple = [strategy: string]
	export interface OutputObject {
		strategy: string
	}
	export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>
	export type Filter = TypedDeferredTopicFilter<Event>
	export type Log = TypedEventLog<Event>
	export type LogDescription = TypedLogDescription<Event>
}

export namespace StrategyRemovedEvent {
	export type InputTuple = [strategy: AddressLike]
	export type OutputTuple = [strategy: string]
	export interface OutputObject {
		strategy: string
	}
	export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>
	export type Filter = TypedDeferredTopicFilter<Event>
	export type Log = TypedEventLog<Event>
	export type LogDescription = TypedLogDescription<Event>
}

export namespace TreasuryUpdatedEvent {
	export type InputTuple = [treasury: AddressLike]
	export type OutputTuple = [treasury: string]
	export interface OutputObject {
		treasury: string
	}
	export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>
	export type Filter = TypedDeferredTopicFilter<Event>
	export type Log = TypedEventLog<Event>
	export type LogDescription = TypedLogDescription<Event>
}

export interface IAllo extends BaseContract {
	connect(runner?: ContractRunner | null): IAllo
	waitForDeployment(): Promise<this>

	interface: IAlloInterface

	queryFilter<TCEvent extends TypedContractEvent>(
		event: TCEvent,
		fromBlockOrBlockhash?: string | number | undefined,
		toBlock?: string | number | undefined
	): Promise<Array<TypedEventLog<TCEvent>>>
	queryFilter<TCEvent extends TypedContractEvent>(
		filter: TypedDeferredTopicFilter<TCEvent>,
		fromBlockOrBlockhash?: string | number | undefined,
		toBlock?: string | number | undefined
	): Promise<Array<TypedEventLog<TCEvent>>>

	on<TCEvent extends TypedContractEvent>(
		event: TCEvent,
		listener: TypedListener<TCEvent>
	): Promise<this>
	on<TCEvent extends TypedContractEvent>(
		filter: TypedDeferredTopicFilter<TCEvent>,
		listener: TypedListener<TCEvent>
	): Promise<this>

	once<TCEvent extends TypedContractEvent>(
		event: TCEvent,
		listener: TypedListener<TCEvent>
	): Promise<this>
	once<TCEvent extends TypedContractEvent>(
		filter: TypedDeferredTopicFilter<TCEvent>,
		listener: TypedListener<TCEvent>
	): Promise<this>

	listeners<TCEvent extends TypedContractEvent>(
		event: TCEvent
	): Promise<Array<TypedListener<TCEvent>>>
	listeners(eventName?: string): Promise<Array<Listener>>
	removeAllListeners<TCEvent extends TypedContractEvent>(
		event?: TCEvent
	): Promise<this>

	addPoolManager: TypedContractMethod<
		[_poolId: BigNumberish, _manager: AddressLike],
		[void],
		'nonpayable'
	>

	addToCloneableStrategies: TypedContractMethod<
		[_strategy: AddressLike],
		[void],
		'nonpayable'
	>

	allocate: TypedContractMethod<
		[_poolId: BigNumberish, _data: BytesLike],
		[void],
		'payable'
	>

	batchAllocate: TypedContractMethod<
		[_poolIds: BigNumberish[], _datas: BytesLike[]],
		[void],
		'nonpayable'
	>

	batchRegisterRecipient: TypedContractMethod<
		[_poolIds: BigNumberish[], _data: BytesLike[]],
		[string[]],
		'nonpayable'
	>

	distribute: TypedContractMethod<
		[_poolId: BigNumberish, _recipientIds: AddressLike[], _data: BytesLike],
		[void],
		'nonpayable'
	>

	fundPool: TypedContractMethod<
		[_poolId: BigNumberish, _amount: BigNumberish],
		[void],
		'payable'
	>

	getBaseFee: TypedContractMethod<[], [bigint], 'view'>

	getFeeDenominator: TypedContractMethod<[], [bigint], 'view'>

	getPercentFee: TypedContractMethod<[], [bigint], 'view'>

	getPool: TypedContractMethod<
		[_poolId: BigNumberish],
		[IAllo.PoolStructOutput],
		'view'
	>

	getRegistry: TypedContractMethod<[], [string], 'view'>

	getStrategy: TypedContractMethod<[_poolId: BigNumberish], [string], 'view'>

	getTreasury: TypedContractMethod<[], [string], 'view'>

	initialize: TypedContractMethod<
		[
			_owner: AddressLike,
			_registry: AddressLike,
			_treasury: AddressLike,
			_percentFee: BigNumberish,
			_baseFee: BigNumberish
		],
		[void],
		'nonpayable'
	>

	isCloneableStrategy: TypedContractMethod<
		[_strategy: AddressLike],
		[boolean],
		'view'
	>

	isPoolAdmin: TypedContractMethod<
		[_poolId: BigNumberish, _address: AddressLike],
		[boolean],
		'view'
	>

	isPoolManager: TypedContractMethod<
		[_poolId: BigNumberish, _address: AddressLike],
		[boolean],
		'view'
	>

	recoverFunds: TypedContractMethod<
		[_token: AddressLike, _recipient: AddressLike],
		[void],
		'nonpayable'
	>

	registerRecipient: TypedContractMethod<
		[_poolId: BigNumberish, _data: BytesLike],
		[string],
		'payable'
	>

	removeFromCloneableStrategies: TypedContractMethod<
		[_strategy: AddressLike],
		[void],
		'nonpayable'
	>

	removePoolManager: TypedContractMethod<
		[_poolId: BigNumberish, _manager: AddressLike],
		[void],
		'nonpayable'
	>

	updateBaseFee: TypedContractMethod<
		[_baseFee: BigNumberish],
		[void],
		'nonpayable'
	>

	updatePercentFee: TypedContractMethod<
		[_percentFee: BigNumberish],
		[void],
		'nonpayable'
	>

	updatePoolMetadata: TypedContractMethod<
		[_poolId: BigNumberish, _metadata: MetadataStruct],
		[void],
		'nonpayable'
	>

	updateRegistry: TypedContractMethod<
		[_registry: AddressLike],
		[void],
		'nonpayable'
	>

	updateTreasury: TypedContractMethod<
		[_treasury: AddressLike],
		[void],
		'nonpayable'
	>

	getFunction<T extends ContractMethod = ContractMethod>(
		key: string | FunctionFragment
	): T

	getFunction(
		nameOrSignature: 'addPoolManager'
	): TypedContractMethod<
		[_poolId: BigNumberish, _manager: AddressLike],
		[void],
		'nonpayable'
	>
	getFunction(
		nameOrSignature: 'addToCloneableStrategies'
	): TypedContractMethod<[_strategy: AddressLike], [void], 'nonpayable'>
	getFunction(
		nameOrSignature: 'allocate'
	): TypedContractMethod<
		[_poolId: BigNumberish, _data: BytesLike],
		[void],
		'payable'
	>
	getFunction(
		nameOrSignature: 'batchAllocate'
	): TypedContractMethod<
		[_poolIds: BigNumberish[], _datas: BytesLike[]],
		[void],
		'nonpayable'
	>
	getFunction(
		nameOrSignature: 'batchRegisterRecipient'
	): TypedContractMethod<
		[_poolIds: BigNumberish[], _data: BytesLike[]],
		[string[]],
		'nonpayable'
	>
	getFunction(
		nameOrSignature: 'distribute'
	): TypedContractMethod<
		[_poolId: BigNumberish, _recipientIds: AddressLike[], _data: BytesLike],
		[void],
		'nonpayable'
	>
	getFunction(
		nameOrSignature: 'fundPool'
	): TypedContractMethod<
		[_poolId: BigNumberish, _amount: BigNumberish],
		[void],
		'payable'
	>
	getFunction(
		nameOrSignature: 'getBaseFee'
	): TypedContractMethod<[], [bigint], 'view'>
	getFunction(
		nameOrSignature: 'getFeeDenominator'
	): TypedContractMethod<[], [bigint], 'view'>
	getFunction(
		nameOrSignature: 'getPercentFee'
	): TypedContractMethod<[], [bigint], 'view'>
	getFunction(
		nameOrSignature: 'getPool'
	): TypedContractMethod<
		[_poolId: BigNumberish],
		[IAllo.PoolStructOutput],
		'view'
	>
	getFunction(
		nameOrSignature: 'getRegistry'
	): TypedContractMethod<[], [string], 'view'>
	getFunction(
		nameOrSignature: 'getStrategy'
	): TypedContractMethod<[_poolId: BigNumberish], [string], 'view'>
	getFunction(
		nameOrSignature: 'getTreasury'
	): TypedContractMethod<[], [string], 'view'>
	getFunction(
		nameOrSignature: 'initialize'
	): TypedContractMethod<
		[
			_owner: AddressLike,
			_registry: AddressLike,
			_treasury: AddressLike,
			_percentFee: BigNumberish,
			_baseFee: BigNumberish
		],
		[void],
		'nonpayable'
	>
	getFunction(
		nameOrSignature: 'isCloneableStrategy'
	): TypedContractMethod<[_strategy: AddressLike], [boolean], 'view'>
	getFunction(
		nameOrSignature: 'isPoolAdmin'
	): TypedContractMethod<
		[_poolId: BigNumberish, _address: AddressLike],
		[boolean],
		'view'
	>
	getFunction(
		nameOrSignature: 'isPoolManager'
	): TypedContractMethod<
		[_poolId: BigNumberish, _address: AddressLike],
		[boolean],
		'view'
	>
	getFunction(
		nameOrSignature: 'recoverFunds'
	): TypedContractMethod<
		[_token: AddressLike, _recipient: AddressLike],
		[void],
		'nonpayable'
	>
	getFunction(
		nameOrSignature: 'registerRecipient'
	): TypedContractMethod<
		[_poolId: BigNumberish, _data: BytesLike],
		[string],
		'payable'
	>
	getFunction(
		nameOrSignature: 'removeFromCloneableStrategies'
	): TypedContractMethod<[_strategy: AddressLike], [void], 'nonpayable'>
	getFunction(
		nameOrSignature: 'removePoolManager'
	): TypedContractMethod<
		[_poolId: BigNumberish, _manager: AddressLike],
		[void],
		'nonpayable'
	>
	getFunction(
		nameOrSignature: 'updateBaseFee'
	): TypedContractMethod<[_baseFee: BigNumberish], [void], 'nonpayable'>
	getFunction(
		nameOrSignature: 'updatePercentFee'
	): TypedContractMethod<[_percentFee: BigNumberish], [void], 'nonpayable'>
	getFunction(
		nameOrSignature: 'updatePoolMetadata'
	): TypedContractMethod<
		[_poolId: BigNumberish, _metadata: MetadataStruct],
		[void],
		'nonpayable'
	>
	getFunction(
		nameOrSignature: 'updateRegistry'
	): TypedContractMethod<[_registry: AddressLike], [void], 'nonpayable'>
	getFunction(
		nameOrSignature: 'updateTreasury'
	): TypedContractMethod<[_treasury: AddressLike], [void], 'nonpayable'>

	getEvent(
		key: 'BaseFeePaid'
	): TypedContractEvent<
		BaseFeePaidEvent.InputTuple,
		BaseFeePaidEvent.OutputTuple,
		BaseFeePaidEvent.OutputObject
	>
	getEvent(
		key: 'BaseFeeUpdated'
	): TypedContractEvent<
		BaseFeeUpdatedEvent.InputTuple,
		BaseFeeUpdatedEvent.OutputTuple,
		BaseFeeUpdatedEvent.OutputObject
	>
	getEvent(
		key: 'PercentFeeUpdated'
	): TypedContractEvent<
		PercentFeeUpdatedEvent.InputTuple,
		PercentFeeUpdatedEvent.OutputTuple,
		PercentFeeUpdatedEvent.OutputObject
	>
	getEvent(
		key: 'PoolCreated'
	): TypedContractEvent<
		PoolCreatedEvent.InputTuple,
		PoolCreatedEvent.OutputTuple,
		PoolCreatedEvent.OutputObject
	>
	getEvent(
		key: 'PoolFunded'
	): TypedContractEvent<
		PoolFundedEvent.InputTuple,
		PoolFundedEvent.OutputTuple,
		PoolFundedEvent.OutputObject
	>
	getEvent(
		key: 'PoolMetadataUpdated'
	): TypedContractEvent<
		PoolMetadataUpdatedEvent.InputTuple,
		PoolMetadataUpdatedEvent.OutputTuple,
		PoolMetadataUpdatedEvent.OutputObject
	>
	getEvent(
		key: 'RegistryUpdated'
	): TypedContractEvent<
		RegistryUpdatedEvent.InputTuple,
		RegistryUpdatedEvent.OutputTuple,
		RegistryUpdatedEvent.OutputObject
	>
	getEvent(
		key: 'StrategyApproved'
	): TypedContractEvent<
		StrategyApprovedEvent.InputTuple,
		StrategyApprovedEvent.OutputTuple,
		StrategyApprovedEvent.OutputObject
	>
	getEvent(
		key: 'StrategyRemoved'
	): TypedContractEvent<
		StrategyRemovedEvent.InputTuple,
		StrategyRemovedEvent.OutputTuple,
		StrategyRemovedEvent.OutputObject
	>
	getEvent(
		key: 'TreasuryUpdated'
	): TypedContractEvent<
		TreasuryUpdatedEvent.InputTuple,
		TreasuryUpdatedEvent.OutputTuple,
		TreasuryUpdatedEvent.OutputObject
	>

	filters: {
		'BaseFeePaid(uint256,uint256)': TypedContractEvent<
			BaseFeePaidEvent.InputTuple,
			BaseFeePaidEvent.OutputTuple,
			BaseFeePaidEvent.OutputObject
		>
		BaseFeePaid: TypedContractEvent<
			BaseFeePaidEvent.InputTuple,
			BaseFeePaidEvent.OutputTuple,
			BaseFeePaidEvent.OutputObject
		>

		'BaseFeeUpdated(uint256)': TypedContractEvent<
			BaseFeeUpdatedEvent.InputTuple,
			BaseFeeUpdatedEvent.OutputTuple,
			BaseFeeUpdatedEvent.OutputObject
		>
		BaseFeeUpdated: TypedContractEvent<
			BaseFeeUpdatedEvent.InputTuple,
			BaseFeeUpdatedEvent.OutputTuple,
			BaseFeeUpdatedEvent.OutputObject
		>

		'PercentFeeUpdated(uint256)': TypedContractEvent<
			PercentFeeUpdatedEvent.InputTuple,
			PercentFeeUpdatedEvent.OutputTuple,
			PercentFeeUpdatedEvent.OutputObject
		>
		PercentFeeUpdated: TypedContractEvent<
			PercentFeeUpdatedEvent.InputTuple,
			PercentFeeUpdatedEvent.OutputTuple,
			PercentFeeUpdatedEvent.OutputObject
		>

		'PoolCreated(uint256,bytes32,address,address,uint256,tuple)': TypedContractEvent<
			PoolCreatedEvent.InputTuple,
			PoolCreatedEvent.OutputTuple,
			PoolCreatedEvent.OutputObject
		>
		PoolCreated: TypedContractEvent<
			PoolCreatedEvent.InputTuple,
			PoolCreatedEvent.OutputTuple,
			PoolCreatedEvent.OutputObject
		>

		'PoolFunded(uint256,uint256,uint256)': TypedContractEvent<
			PoolFundedEvent.InputTuple,
			PoolFundedEvent.OutputTuple,
			PoolFundedEvent.OutputObject
		>
		PoolFunded: TypedContractEvent<
			PoolFundedEvent.InputTuple,
			PoolFundedEvent.OutputTuple,
			PoolFundedEvent.OutputObject
		>

		'PoolMetadataUpdated(uint256,tuple)': TypedContractEvent<
			PoolMetadataUpdatedEvent.InputTuple,
			PoolMetadataUpdatedEvent.OutputTuple,
			PoolMetadataUpdatedEvent.OutputObject
		>
		PoolMetadataUpdated: TypedContractEvent<
			PoolMetadataUpdatedEvent.InputTuple,
			PoolMetadataUpdatedEvent.OutputTuple,
			PoolMetadataUpdatedEvent.OutputObject
		>

		'RegistryUpdated(address)': TypedContractEvent<
			RegistryUpdatedEvent.InputTuple,
			RegistryUpdatedEvent.OutputTuple,
			RegistryUpdatedEvent.OutputObject
		>
		RegistryUpdated: TypedContractEvent<
			RegistryUpdatedEvent.InputTuple,
			RegistryUpdatedEvent.OutputTuple,
			RegistryUpdatedEvent.OutputObject
		>

		'StrategyApproved(address)': TypedContractEvent<
			StrategyApprovedEvent.InputTuple,
			StrategyApprovedEvent.OutputTuple,
			StrategyApprovedEvent.OutputObject
		>
		StrategyApproved: TypedContractEvent<
			StrategyApprovedEvent.InputTuple,
			StrategyApprovedEvent.OutputTuple,
			StrategyApprovedEvent.OutputObject
		>

		'StrategyRemoved(address)': TypedContractEvent<
			StrategyRemovedEvent.InputTuple,
			StrategyRemovedEvent.OutputTuple,
			StrategyRemovedEvent.OutputObject
		>
		StrategyRemoved: TypedContractEvent<
			StrategyRemovedEvent.InputTuple,
			StrategyRemovedEvent.OutputTuple,
			StrategyRemovedEvent.OutputObject
		>

		'TreasuryUpdated(address)': TypedContractEvent<
			TreasuryUpdatedEvent.InputTuple,
			TreasuryUpdatedEvent.OutputTuple,
			TreasuryUpdatedEvent.OutputObject
		>
		TreasuryUpdated: TypedContractEvent<
			TreasuryUpdatedEvent.InputTuple,
			TreasuryUpdatedEvent.OutputTuple,
			TreasuryUpdatedEvent.OutputObject
		>
	}
}
