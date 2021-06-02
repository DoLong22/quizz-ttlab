import { Module, VuexModule, Action, Mutation } from 'vuex-module-decorators'
import { IVocabulary, IGetVocabularyListResponse } from './types'
import { vocabularyService } from './services/api.service'

@Module({
  name: 'vocabulary',
  stateFactory: true,
  namespaced: true
})
class VocabularyModule extends VuexModule {
    vocabularies: IVocabulary[] = []
    totalVocabularies = 0
  // ACTIONS
    @Action
    async getVocabularies () {
      const response = await vocabularyService.getList({ limit: 10 })
      return response
    //   console.log(response)
    //   if (response.success) {
    //     const vocabularies: IVocabulary[] = response || []
    //     this.setVocabularies(vocabularies)
    //     this.setTotalVocabularies(vocabularies.length)
    //     return response
    //   } else {
    //   // TODO:
    //   }
    }

  // GETTERS

  // MUTATION
  @Mutation
  setVocabularies (vocabularies: IVocabulary[]) {
    this.vocabularies = vocabularies
  }

  @Mutation
  setTotalVocabularies (totalVocabularies: number) {
    this.totalVocabularies = totalVocabularies
  }
}

export default VocabularyModule
