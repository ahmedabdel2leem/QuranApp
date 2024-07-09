export interface IChapterResponse {
  chapters: ChapterInfo[];
}
export interface ChapterInfo{
    id?:number,
    revelation_place:string,
    revelation_order:string,
    name_simple:string,
    name_arabic:string,
    verses_count:number,
    bismillah_pre:boolean,
    pages: number[],
    translated_name: {
        language_name: string,
        name: string
      }
}

export interface IJuzsResponse {
  juzs: IJuzs[];
}
export interface IJuzs {
  first_verse_id: number;
  id?: number;
  juz_number: number;
  last_verse_id: number;
  verse_mapping: { [key: string]: string };
  verses_count: number;
}
// export interface Versemapping {
//   "1": string;
//   "2": string;
// }



export interface JuzsStatus {
  data:  IJuzs[] ;
  loading: boolean;
  error: string | null;
}
export interface ChaptrStatus {
  data: ChapterInfo[] ;
  loading: boolean;
  error: string | null;
}


export interface ChapterState {
  chapter: ChaptrStatus;
  juzs:JuzsStatus
}

export interface IPage {
  id: number
  verse_number: number
  verse_key: string
  hizb_number: number
  rub_el_hizb_number: number
  ruku_number: number
  manzil_number: number
  sajdah_number: any
  page_number: number
  juz_number: number
  words: Word[]
  audio:AudioURL
}
interface AudioURL{
  url:string
}

export interface Word {
  id: number
  position: number
  audio_url?: string
  char_type_name: string
  text_uthmani: string
  text_imlaei: string
  page_number: number
  line_number: number
  text: string
  translation: Translation
  transliteration: Transliteration
}

export interface Translation {
  text: string
  language_name: string
}

export interface Transliteration {
  text?: string
  language_name: string
}
