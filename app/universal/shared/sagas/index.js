import * as search from '../../search'

export default function* rootSaga() {

  yield [
    search.saga()
  ]

}
