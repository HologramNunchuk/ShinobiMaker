function Shinobi(name, age, village, rank, elements) {
  (this.Name = name),
    (this.Age = age),
    (this.Village = village),
    (this.Rank = rank),
    (this.Elements = elements);
}

const naruto = new Shinobi(
  "Uzumaki Naruto",
  25,
  "Konoha",
  "7th Hokage",
  "Sage of Six Paths Senjutsu Energy, Yin/Yang Energy"
);

const sasuke = new Shinobi(
  "Uchiha Sasuke",
  25,
  "Missing-Nin Formerly Konoha",
  "Hokage Level",
  "Sage of Six Paths Rinnegan Energy, Yin Energy"
);

const minato = new Shinobi(
  "Minato Namikaze",
  "24 - deceased",
  "Konoha",
  "4th Hokage",
  "Senjutsu Energy, Yin/Yang Energy"
);

console.log(naruto, sasuke, minato);
