class EventMap {
  constructor(client, options) {
    this.client = client;
    this.name = options.name;
    this.once = options.once || false;
    this.log = this.client.log;
    this.quickdb = this.client.quickdb;
    this.emoji = this.client.emoji;
  }
}

export default EventMap;
