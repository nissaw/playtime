const LETTER_GROUPS = {
  vowels: ['a', 'e', 'i', 'o', 'u'],
  consonants: ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'],
  english: {
    vowels: {
      a: { selected: true },
      e: { selected: false },
      i: { selected: false },
      o: { selected: true },
      u: { selected: true }
    },
    consonants: {
      b: { selected: true },
      c: { selected: true },
      d: { selected: true },
      f: { selected: true },
      g: { selected: true },
      h: { selected: true },
      j: { selected: true },
      k: { selected: true },
      l: { selected: true },
      m: { selected: true },
      n: { selected: true },
      p: { selected: true },
      q: { selected: true },
      r: { selected: true },
      s: { selected: true },
      t: { selected: true },
      v: { selected: true },
      w: { selected: true },
      x: { selected: true },
      y: { selected: true },
      z: { selected: true }    
    }
  }
}

LETTER_GROUPS.english.alphabet = Object.assign({}, LETTER_GROUPS.english.vowels, LETTER_GROUPS.english.consonants);

export { LETTER_GROUPS };