/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator 0.16.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var models = require('./index');

/**
 * @class
 * Initializes a new instance of the BatchAccountUpdateParameters class.
 * @constructor
 * Parameters supplied to the Update operation.
 * @member {object} [tags] The user specified tags associated with the account.
 * 
 * @member {object} [properties] The properties of the account.
 * 
 * @member {object} [properties.autoStorage] The properties related to auto
 * storage.
 * 
 * @member {string} [properties.autoStorage.storageAccountId] The resource id
 * of the storage account to be used for auto storage.
 * 
 */
function BatchAccountUpdateParameters() {
}

/**
 * Defines the metadata of BatchAccountUpdateParameters
 *
 * @returns {object} metadata of BatchAccountUpdateParameters
 *
 */
BatchAccountUpdateParameters.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'BatchAccountUpdateParameters',
    type: {
      name: 'Composite',
      className: 'BatchAccountUpdateParameters',
      modelProperties: {
        tags: {
          required: false,
          serializedName: 'tags',
          type: {
            name: 'Dictionary',
            value: {
                required: false,
                serializedName: 'StringElementType',
                type: {
                  name: 'String'
                }
            }
          }
        },
        properties: {
          required: false,
          serializedName: 'properties',
          type: {
            name: 'Composite',
            className: 'AccountBaseProperties'
          }
        }
      }
    }
  };
};

module.exports = BatchAccountUpdateParameters;