import { BaseService } from '@/utils/api'
import { IServiceOption } from '~/modules/common/types'

class VocabularyApiService extends BaseService {
  constructor (params: IServiceOption) {
    super(params)
  }
}

export const vocabularyService = new VocabularyApiService({ baseUrl: 'http://localhost:8080/vocabulary.json' })
