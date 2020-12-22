import {
  IPlayer,
  IPlayerColor,
  IPlayersState,
  ISetPlayerNamePayload,
  ISetPlayerPositionPayload,
  ISetPlayerSectionPayload,
} from "utils/types/players";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  getDefaultPlayersState,
  getInitialPlayersState,
  getNewPlayersState,
} from "store/shared/players";

import { IStoreState } from "utils/types/store";

const PlayersSlice = createSlice({
  name: "Players",
  initialState: getInitialPlayersState(),
  reducers: {
    setPlayerName: (
      state: IPlayersState,
      action: PayloadAction<ISetPlayerNamePayload>
    ) =>
      getNewPlayersState((player: IPlayerColor) => {
        if (player === action.payload.player) {
          return {
            ...state[player],
            name: action.payload.newName,
            position: { ...state[player].position },
          };
        }

        return {
          ...state[player],
          position: { ...state[player].position },
        };
      }),

    setPlayerPosition: (
      state: IPlayersState,
      action: PayloadAction<ISetPlayerPositionPayload>
    ) =>
      getNewPlayersState((player: IPlayerColor) => {
        if (player === action.payload.player) {
          return {
            ...state[player],
            position: action.payload.newPosition,
          };
        }

        return {
          ...state[player],
          position: { ...state[player].position },
        };
      }),

    setPlayerSection: (
      state: IPlayersState,
      action: PayloadAction<ISetPlayerSectionPayload>
    ) =>
      getNewPlayersState((player: IPlayerColor) => {
        if (player === action.payload.player) {
          return {
            ...state[player],
            section: action.payload.newSection,
            position: { ...state[player].position },
          };
        }

        return {
          ...state[player],
          position: { ...state[player].position },
        };
      }),

    setPlayer: (state: IPlayersState, action: PayloadAction<IPlayer>) =>
      getNewPlayersState((player: IPlayerColor) => {
        if (player === action.payload.color) {
          return action.payload;
        }

        return {
          ...state[player],
          position: { ...state[player].position },
        };
      }),

    setPlayersState: (
      state: IPlayersState,
      action: PayloadAction<IPlayersState>
    ) => action.payload,

    resetPlayersState: () => getDefaultPlayersState(),
  },
});

export const {
  setPlayerName,
  setPlayerPosition,
  setPlayerSection,
  setPlayer,
  setPlayersState,
  resetPlayersState,
} = PlayersSlice.actions;

export const getPlayer = (name: IPlayerColor) => (
  state: IStoreState
): IPlayer => state.Players[name];

export const getPlayers = (state: IStoreState): IPlayersState => state.Players;

export default PlayersSlice;