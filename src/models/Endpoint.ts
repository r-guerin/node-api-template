export class Endpoint {
  constructor(
    private protocol: 'http' | 'https',
    private domain: string,
    private path: string,
    private port?: string,
  ) {}

  get endpoint(): string {
    const url = new URL(`${this.protocol}://${this.domain}`);

    url.port = this.port ?? '';
    url.pathname = this.path;

    return url.toString();
  }
}
