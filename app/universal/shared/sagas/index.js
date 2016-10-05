import * as search from '../../search'
import * as ui from '../../ui'

export default function* rootSaga() {

  yield [
    search.saga(),
    ui.saga()
  ]

}
