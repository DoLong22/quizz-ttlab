import { BaseService } from '@/utils/api'

class VocabularyApiService extends BaseService {
}

export const vocabularyService = new VocabularyApiService({ baseUrl: '/vocabulary.json' })
