const LETTER_GROUPS = {
  english: {
    vowels: {
      a: { selected: true },
      e: { selected: true },
      i: { selected: true },
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
  },
  norwegian: {
    vowels: {
      a: { selected: true },
      e: { selected: true },
      i: { selected: true },
      o: { selected: true },
      u: { selected: true },
      y: { selected: true },
      å: { selected: true },
      æ: { selected: true },
      ø: { selected: true }
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
      z: { selected: true }
    }
  }
}

LETTER_GROUPS.english.alphabet = Object.assign({}, LETTER_GROUPS.english.vowels, LETTER_GROUPS.english.consonants);

export { LETTER_GROUPS };