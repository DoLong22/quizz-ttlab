import { IGetListResponse } from '@/modules/common/types'

export interface IVocabulary {
  kanji: string,
  hiragana: string,
  romaji: string,
  kanjiDesc: string,
  desc: string,
  category: []
}

export interface IGetVocabularyListResponse extends IGetListResponse {
  data: {
    items: IVocabulary[]
    totalItems: number
  };
}
