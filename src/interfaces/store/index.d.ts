interface RootStoreState {
  login: LoginStoreState;
  layout: LayoutStoreState;
  spider: SpiderStoreState;
  file: FileStoreState;
}

type StoreGetter<S, R, T> = (state: S, getters: StoreGetter<S, R, T>, rootState: R, rootGetters: any) => T;
type StoreMutation<S, P, T> = (state: S, payload?: P) => T;
