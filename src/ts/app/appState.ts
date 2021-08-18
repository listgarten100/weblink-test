import { IAppState } from './models/appState.model';


class AppState {
  static instance: AppState;
  static exists: boolean;
  data: IAppState;

  constructor(data: IAppState) {
    if (AppState.exists) {
      return AppState.instance;
    }
    AppState.instance = this;
    AppState.exists = true;
    this.data = data;
  }

  getData(): IAppState {
    return this.data;
  }

  setData(data: Partial<IAppState>): void {
    this.data = { ...this.data, ...data };
  }
}

export const appState = new AppState({
  isFillGeneralInfo: false,
  numberWorkers: 0,
  currentWorker: 0,
  isModal: false,
});
