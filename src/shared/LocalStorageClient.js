import {storage, storageName} from '@core/utils'

export class LocalStorageClient {
  constructor(name) {
    this.name = storageName(name)
  }

  get() {
    return new Promise(resolve => {
      const state = storage(this.name)
      setTimeout(() => {
        return resolve(state)
      }, 300)
    })
  }

  save(state) {
    storage(this.name, state)
    return Promise.resolve()
  }
}
