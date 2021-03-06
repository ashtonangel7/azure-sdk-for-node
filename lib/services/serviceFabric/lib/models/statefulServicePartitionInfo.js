/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * Information about a partition of a stateful Service Fabric service..
 *
 * @extends models['ServicePartitionInfo']
 */
class StatefulServicePartitionInfo extends models['ServicePartitionInfo'] {
  /**
   * Create a StatefulServicePartitionInfo.
   * @member {number} [targetReplicaSetSize] The target replica set size as a
   * number.
   * @member {number} [minReplicaSetSize] The minimum replica set size as a
   * number.
   * @member {moment.duration} [lastQuorumLossDuration] The duration for which
   * this partition was in quorum loss. If the partition is currently in quorum
   * loss, it returns the duration since it has been in that state. This field
   * is using ISO8601 format for specifying the duration.
   * @member {object} [currentConfigurationEpoch]
   * @member {string} [currentConfigurationEpoch.configurationVersion] The
   * current configuration number of this Epoch. The configuration number is an
   * increasing value that is updated whenever the configuration of this
   * replica set changes.
   * @member {string} [currentConfigurationEpoch.dataLossVersion] The current
   * dataloss number of this Epoch. The data loss number property is an
   * increasing value which is updated whenever data loss is suspected, as when
   * loss of a quorum of replicas in the replica set that includes the Primary
   * replica.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of StatefulServicePartitionInfo
   *
   * @returns {object} metadata of StatefulServicePartitionInfo
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Stateful',
      type: {
        name: 'Composite',
        className: 'StatefulServicePartitionInfo',
        modelProperties: {
          healthState: {
            required: false,
            serializedName: 'HealthState',
            type: {
              name: 'String'
            }
          },
          partitionStatus: {
            required: false,
            serializedName: 'PartitionStatus',
            type: {
              name: 'String'
            }
          },
          partitionInformation: {
            required: false,
            serializedName: 'PartitionInformation',
            type: {
              name: 'Composite',
              polymorphicDiscriminator: {
                serializedName: 'ServicePartitionKind',
                clientName: 'servicePartitionKind'
              },
              uberParent: 'PartitionInformation',
              className: 'PartitionInformation'
            }
          },
          serviceKind: {
            required: true,
            serializedName: 'ServiceKind',
            type: {
              name: 'String'
            }
          },
          targetReplicaSetSize: {
            required: false,
            serializedName: 'TargetReplicaSetSize',
            type: {
              name: 'Number'
            }
          },
          minReplicaSetSize: {
            required: false,
            serializedName: 'MinReplicaSetSize',
            type: {
              name: 'Number'
            }
          },
          lastQuorumLossDuration: {
            required: false,
            serializedName: 'LastQuorumLossDuration',
            type: {
              name: 'TimeSpan'
            }
          },
          currentConfigurationEpoch: {
            required: false,
            serializedName: 'CurrentConfigurationEpoch',
            type: {
              name: 'Composite',
              className: 'Epoch'
            }
          }
        }
      }
    };
  }
}

module.exports = StatefulServicePartitionInfo;
