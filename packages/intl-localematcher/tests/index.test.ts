import {match} from '../'

test('Intl.LocaleMatcher', function () {
  expect(match(['fr-XX', 'en'], ['fr', 'en'], 'en')).toEqual('fr')
  expect(match(['zh-TW', 'en'], ['zh-Hant-TW', 'en'], 'en')).toEqual(
    'zh-Hant-TW'
  )
  expect(
    match(
      ['sr-Latn-BA'],
      [
        'af',
        'ak',
        'am',
        'an',
        'ar',
        'ars',
        'as',
        'asa',
        'ast',
        'az',
        'be',
        'bem',
        'bez',
        'bg',
        'bho',
        'bm',
        'bn',
        'bo',
        'br',
        'brx',
        'bs',
        'ca',
        'ce',
        'ceb',
        'cgg',
        'chr',
        'ckb',
        'cs',
        'cy',
        'da',
        'de',
        'doi',
        'dsb',
        'dv',
        'dz',
        'ee',
        'el',
        'en',
        'eo',
        'es',
        'et',
        'eu',
        'fa',
        'ff',
        'fi',
        'fil',
        'fo',
        'fr',
        'fur',
        'fy',
        'ga',
        'gd',
        'gl',
        'gsw',
        'gu',
        'guw',
        'gv',
        'ha',
        'haw',
        'he',
        'hi',
        'hr',
        'hsb',
        'hu',
        'hy',
        'ia',
        'id',
        'ig',
        'ii',
        'in',
        'io',
        'is',
        'it',
        'iu',
        'iw',
        'ja',
        'jbo',
        'jgo',
        'ji',
        'jmc',
        'jv',
        'jw',
        'ka',
        'kab',
        'kaj',
        'kcg',
        'kde',
        'kea',
        'kk',
        'kkj',
        'kl',
        'km',
        'kn',
        'ko',
        'ks',
        'ksb',
        'ksh',
        'ku',
        'kw',
        'ky',
        'lag',
        'lb',
        'lg',
        'lij',
        'lkt',
        'ln',
        'lo',
        'lt',
        'lv',
        'mas',
        'mg',
        'mgo',
        'mk',
        'ml',
        'mn',
        'mo',
        'mr',
        'ms',
        'mt',
        'my',
        'nah',
        'naq',
        'nb',
        'nd',
        'ne',
        'nl',
        'nn',
        'nnh',
        'no',
        'nqo',
        'nr',
        'nso',
        'ny',
        'nyn',
        'om',
        'or',
        'os',
        'osa',
        'pa',
        'pap',
        'pcm',
        'pl',
        'prg',
        'ps',
        'pt-PT',
        'pt',
        'rm',
        'ro',
        'rof',
        'ru',
        'rwk',
        'sah',
        'saq',
        'sat',
        'sc',
        'scn',
        'sd',
        'sdh',
        'se',
        'seh',
        'ses',
        'sg',
        'sh',
        'shi',
        'si',
        'sk',
        'sl',
        'sma',
        'smi',
        'smj',
        'smn',
        'sms',
        'sn',
        'so',
        'sq',
        'sr',
        'ss',
        'ssy',
        'st',
        'su',
        'sv',
        'sw',
        'syr',
        'ta',
        'te',
        'teo',
        'th',
        'ti',
        'tig',
        'tk',
        'tl',
        'tn',
        'to',
        'tr',
        'ts',
        'tzm',
        'ug',
        'uk',
        'ur',
        'uz',
        've',
        'vi',
        'vo',
        'vun',
        'wa',
        'wae',
        'wo',
        'xh',
        'xog',
        'yi',
        'yo',
        'yue',
        'zh',
        'zu',
      ],
      'en'
    )
  ).toEqual('sh')
})

test('empty requested', function () {
  expect(match([], ['zh-Hant-TW', 'en'], 'en')).toEqual('en')
})

test('extension', function () {
  expect(match(['fr-CA-x-foo'], ['zh-Hant-TW', 'fr', 'en'], 'en')).toEqual('fr')
})
