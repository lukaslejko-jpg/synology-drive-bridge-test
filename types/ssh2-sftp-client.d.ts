declare module "ssh2-sftp-client" {
  interface SftpStats {
    size: number;
    [key: string]: unknown;
  }

  interface SftpConnectConfig {
    host: string;
    port?: number;
    username: string;
    password?: string;
    privateKey?: string;
    passphrase?: string;
    readyTimeout?: number;
  }

  class SftpClient {
    connect(config: SftpConnectConfig): Promise<void>;
    end(): Promise<void>;
    cwd(): Promise<string>;
    put(input: Buffer | string, remotePath: string): Promise<unknown>;
    stat(remotePath: string): Promise<SftpStats>;
    get(remotePath: string): Promise<Buffer>;
  }

  export = SftpClient;
}
