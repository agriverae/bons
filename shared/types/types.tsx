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
};

export type PlayerType = CharacterType & {
  cards: CardType[];
};

export type MonsterType = CharacterType & {
  image: string;
};

export type GameDataType = {
  id: string;
  turnsLeft: number;
  currentTurn: number;
  player: PlayerType;
  monster: MonsterType;
  monsterEffect: MonsterEffectType;
};

export type MonsterEffectType = {
  effect: string;
  value: number;
};

export type updateGameType = (gameInfo: GameDataType) => void;
