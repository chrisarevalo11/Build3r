/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from 'ethers'
import type {
	IAllo,
	IAlloInterface
} from '../../../../../contracts/allo-protocol/core/interfaces/IAllo'

const _abi = [
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'uint256',
				name: 'poolId',
				type: 'uint256'
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'amount',
				type: 'uint256'
			}
		],
		name: 'BaseFeePaid',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'uint256',
				name: 'baseFee',
				type: 'uint256'
			}
		],
		name: 'BaseFeeUpdated',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'uint256',
				name: 'percentFee',
				type: 'uint256'
			}
		],
		name: 'PercentFeeUpdated',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'uint256',
				name: 'poolId',
				type: 'uint256'
			},
			{
				indexed: true,
				internalType: 'bytes32',
				name: 'profileId',
				type: 'bytes32'
			},
			{
				indexed: false,
				internalType: 'contract IStrategy',
				name: 'strategy',
				type: 'address'
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'token',
				type: 'address'
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'amount',
				type: 'uint256'
			},
			{
				components: [
					{
						internalType: 'uint256',
						name: 'protocol',
						type: 'uint256'
					},
					{
						internalType: 'string',
						name: 'pointer',
						type: 'string'
					}
				],
				indexed: false,
				internalType: 'struct Metadata',
				name: 'metadata',
				type: 'tuple'
			}
		],
		name: 'PoolCreated',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'uint256',
				name: 'poolId',
				type: 'uint256'
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'amount',
				type: 'uint256'
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'fee',
				type: 'uint256'
			}
		],
		name: 'PoolFunded',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'uint256',
				name: 'poolId',
				type: 'uint256'
			},
			{
				components: [
					{
						internalType: 'uint256',
						name: 'protocol',
						type: 'uint256'
					},
					{
						internalType: 'string',
						name: 'pointer',
						type: 'string'
					}
				],
				indexed: false,
				internalType: 'struct Metadata',
				name: 'metadata',
				type: 'tuple'
			}
		],
		name: 'PoolMetadataUpdated',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address',
				name: 'registry',
				type: 'address'
			}
		],
		name: 'RegistryUpdated',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address',
				name: 'strategy',
				type: 'address'
			}
		],
		name: 'StrategyApproved',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address',
				name: 'strategy',
				type: 'address'
			}
		],
		name: 'StrategyRemoved',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address',
				name: 'treasury',
				type: 'address'
			}
		],
		name: 'TreasuryUpdated',
		type: 'event'
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_poolId',
				type: 'uint256'
			},
			{
				internalType: 'address',
				name: '_manager',
				type: 'address'
			}
		],
		name: 'addPoolManager',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '_strategy',
				type: 'address'
			}
		],
		name: 'addToCloneableStrategies',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_poolId',
				type: 'uint256'
			},
			{
				internalType: 'bytes',
				name: '_data',
				type: 'bytes'
			}
		],
		name: 'allocate',
		outputs: [],
		stateMutability: 'payable',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'uint256[]',
				name: '_poolIds',
				type: 'uint256[]'
			},
			{
				internalType: 'bytes[]',
				name: '_datas',
				type: 'bytes[]'
			}
		],
		name: 'batchAllocate',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'uint256[]',
				name: '_poolIds',
				type: 'uint256[]'
			},
			{
				internalType: 'bytes[]',
				name: '_data',
				type: 'bytes[]'
			}
		],
		name: 'batchRegisterRecipient',
		outputs: [
			{
				internalType: 'address[]',
				name: '',
				type: 'address[]'
			}
		],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_poolId',
				type: 'uint256'
			},
			{
				internalType: 'address[]',
				name: '_recipientIds',
				type: 'address[]'
			},
			{
				internalType: 'bytes',
				name: '_data',
				type: 'bytes'
			}
		],
		name: 'distribute',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_poolId',
				type: 'uint256'
			},
			{
				internalType: 'uint256',
				name: '_amount',
				type: 'uint256'
			}
		],
		name: 'fundPool',
		outputs: [],
		stateMutability: 'payable',
		type: 'function'
	},
	{
		inputs: [],
		name: 'getBaseFee',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'getFeeDenominator',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'getPercentFee',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_poolId',
				type: 'uint256'
			}
		],
		name: 'getPool',
		outputs: [
			{
				components: [
					{
						internalType: 'bytes32',
						name: 'profileId',
						type: 'bytes32'
					},
					{
						internalType: 'contract IStrategy',
						name: 'strategy',
						type: 'address'
					},
					{
						internalType: 'address',
						name: 'token',
						type: 'address'
					},
					{
						components: [
							{
								internalType: 'uint256',
								name: 'protocol',
								type: 'uint256'
							},
							{
								internalType: 'string',
								name: 'pointer',
								type: 'string'
							}
						],
						internalType: 'struct Metadata',
						name: 'metadata',
						type: 'tuple'
					},
					{
						internalType: 'bytes32',
						name: 'managerRole',
						type: 'bytes32'
					},
					{
						internalType: 'bytes32',
						name: 'adminRole',
						type: 'bytes32'
					}
				],
				internalType: 'struct IAllo.Pool',
				name: '',
				type: 'tuple'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'getRegistry',
		outputs: [
			{
				internalType: 'contract IRegistry',
				name: '',
				type: 'address'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_poolId',
				type: 'uint256'
			}
		],
		name: 'getStrategy',
		outputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'getTreasury',
		outputs: [
			{
				internalType: 'address payable',
				name: '',
				type: 'address'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '_owner',
				type: 'address'
			},
			{
				internalType: 'address',
				name: '_registry',
				type: 'address'
			},
			{
				internalType: 'address payable',
				name: '_treasury',
				type: 'address'
			},
			{
				internalType: 'uint256',
				name: '_percentFee',
				type: 'uint256'
			},
			{
				internalType: 'uint256',
				name: '_baseFee',
				type: 'uint256'
			}
		],
		name: 'initialize',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '_strategy',
				type: 'address'
			}
		],
		name: 'isCloneableStrategy',
		outputs: [
			{
				internalType: 'bool',
				name: '',
				type: 'bool'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_poolId',
				type: 'uint256'
			},
			{
				internalType: 'address',
				name: '_address',
				type: 'address'
			}
		],
		name: 'isPoolAdmin',
		outputs: [
			{
				internalType: 'bool',
				name: '',
				type: 'bool'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_poolId',
				type: 'uint256'
			},
			{
				internalType: 'address',
				name: '_address',
				type: 'address'
			}
		],
		name: 'isPoolManager',
		outputs: [
			{
				internalType: 'bool',
				name: '',
				type: 'bool'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '_token',
				type: 'address'
			},
			{
				internalType: 'address',
				name: '_recipient',
				type: 'address'
			}
		],
		name: 'recoverFunds',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_poolId',
				type: 'uint256'
			},
			{
				internalType: 'bytes',
				name: '_data',
				type: 'bytes'
			}
		],
		name: 'registerRecipient',
		outputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address'
			}
		],
		stateMutability: 'payable',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '_strategy',
				type: 'address'
			}
		],
		name: 'removeFromCloneableStrategies',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_poolId',
				type: 'uint256'
			},
			{
				internalType: 'address',
				name: '_manager',
				type: 'address'
			}
		],
		name: 'removePoolManager',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_baseFee',
				type: 'uint256'
			}
		],
		name: 'updateBaseFee',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_percentFee',
				type: 'uint256'
			}
		],
		name: 'updatePercentFee',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '_poolId',
				type: 'uint256'
			},
			{
				components: [
					{
						internalType: 'uint256',
						name: 'protocol',
						type: 'uint256'
					},
					{
						internalType: 'string',
						name: 'pointer',
						type: 'string'
					}
				],
				internalType: 'struct Metadata',
				name: '_metadata',
				type: 'tuple'
			}
		],
		name: 'updatePoolMetadata',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '_registry',
				type: 'address'
			}
		],
		name: 'updateRegistry',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'address payable',
				name: '_treasury',
				type: 'address'
			}
		],
		name: 'updateTreasury',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	}
] as const

export class IAllo__factory {
	static readonly abi = _abi
	static createInterface(): IAlloInterface {
		return new Interface(_abi) as IAlloInterface
	}
	static connect(address: string, runner?: ContractRunner | null): IAllo {
		return new Contract(address, _abi, runner) as unknown as IAllo
	}
}
