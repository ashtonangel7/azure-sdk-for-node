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

/**
 * The response model for the list hybrid runbook worker groups.
 */
class HybridRunbookWorkerGroupsListResult extends Array {
  /**
   * Create a HybridRunbookWorkerGroupsListResult.
   * @member {string} [nextLink] Gets or sets the next link.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of HybridRunbookWorkerGroupsListResult
   *
   * @returns {object} metadata of HybridRunbookWorkerGroupsListResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'HybridRunbookWorkerGroupsListResult',
      type: {
        name: 'Composite',
        className: 'HybridRunbookWorkerGroupsListResult',
        modelProperties: {
          value: {
            required: false,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'HybridRunbookWorkerGroupElementType',
                  type: {
                    name: 'Composite',
                    className: 'HybridRunbookWorkerGroup'
                  }
              }
            }
          },
          nextLink: {
            required: false,
            serializedName: 'nextLink',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = HybridRunbookWorkerGroupsListResult;