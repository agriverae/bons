export type CardType = {
  id: string;
  effect: string;
  value: number;
};

export type CharacterType = {
  name: string;
  hp: number;
  maxHp: number;
  shield: number;
  cards?: CardType[];
  image?: string;
};

export type GameDataType = {
  gameData: {
    id: string;
    turnsLeft: number;
    currentTurn: number;
    player: CharacterType;
    monster: CharacterType;
    monsterEffect?: MonsterEffectType;
  };
};

export type MonsterEffectType = {
  effect: string;
  value: number;
};
