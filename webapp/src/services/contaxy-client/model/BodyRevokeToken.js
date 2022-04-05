/**
 * Contaxy API
 * Functionality to create and manage projects, services, jobs, and files.
 *
 * The version of the OpenAPI document: 0.0.11
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The BodyRevokeToken model module.
 * @module model/BodyRevokeToken
 * @version 0.0.11
 */
class BodyRevokeToken {
  /**
   * Constructs a new <code>BodyRevokeToken</code>.
   * @alias module:model/BodyRevokeToken
   * @param token {String} The token that should be revoked.
   */
  constructor(token) {
    BodyRevokeToken.initialize(this, token);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  static initialize(obj, token) {
    obj['token'] = token;
  }

  /**
   * Constructs a <code>BodyRevokeToken</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BodyRevokeToken} obj Optional instance to populate.
   * @return {module:model/BodyRevokeToken} The populated <code>BodyRevokeToken</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new BodyRevokeToken();

      if (data.hasOwnProperty('token')) {
        obj['token'] = ApiClient.convertToType(data['token'], 'String');
      }
      if (data.hasOwnProperty('token_type_hint')) {
        obj['token_type_hint'] = ApiClient.convertToType(
          data['token_type_hint'],
          'String'
        );
      }
    }
    return obj;
  }
}

/**
 * The token that should be revoked.
 * @member {String} token
 */
BodyRevokeToken.prototype['token'] = undefined;

/**
 * A hint about the type of the token submitted for revokation.
 * @member {String} token_type_hint
 */
BodyRevokeToken.prototype['token_type_hint'] = undefined;

export default BodyRevokeToken;