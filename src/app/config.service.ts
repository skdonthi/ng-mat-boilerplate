import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { StorageService } from './storage.service';

export function configFactory(): () => Promise<XiConfig> {
  const appConfigService = inject(ConfigService);
  return async () => await appConfigService.getConfig();
}

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  private config!: XiConfig;

  constructor(private http: HttpClient, private storage: StorageService) {}

  async getConfig(): Promise<XiConfig> {
    this.config = await lastValueFrom(
      this.http.get<XiConfig>('/assets/config.json')
    );
    this.storage.set('apiUrl', this.config.apiUrl);
    return this.config;
  }

  get apiUrl() {
    return this.config.apiUrl;
  }
}

export interface XiConfig {
  apiUrl: string;
}
