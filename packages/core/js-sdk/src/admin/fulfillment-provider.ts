import { HttpTypes } from "@medusajs/types"
import { Client } from "../client"
import { ClientHeaders } from "../types"

export class FulfillmentProvider {
  /**
   * @ignore
   */
  private client: Client
  /**
   * @ignore
   */
  constructor(client: Client) {
    this.client = client
  }

  async list(
    query?: HttpTypes.AdminFulfillmentProviderListParams,
    headers?: ClientHeaders
  ) {
    return await this.client.fetch<HttpTypes.AdminFulfillmentProviderListResponse>(
      `/admin/fulfillment-providers`,
      {
        method: "GET",
        headers,
        query,
      }
    )
  }
}
