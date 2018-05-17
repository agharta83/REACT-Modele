/**
 * NPM import
 */

/**
 * Local import
 */
import { TOGGLE_LIGHT } from '../reducer';

/**
 * Code
 */

/**
 * Ce middleware détecte les cycles d'allumage de la lampe et calcule le
 * temps pendant lequel la lampe est restée allumée. On peut en déduire
 * la consommation électrique, ou encore envoyer une alerte si la lampe
 * reste allumée trop longtemps.
 * Note: la durée d'allumage n'est *PAS* une information qu'on souhaite
 * conserver dans le state ; on est uniquement intéressé par les effets
 * de bord : calculs, envois de mails…
 */
const TrackUsage = store => next => (action) => {
  switch (action.type) {
    case TOGGLE_LIGHT: {
      const state = store.getState();
      if (!state.light) {
        // La lampe est éteinte et va s'allumer.
        console.time('lightDuration');
        console.log(`La lampe ${state.name} s'allume.`);
      }
      else {
        // La lampe est allumée et va s'éteindre.
        console.timeEnd('lightDuration');
        console.log(`La lampe ${state.name} s'éteint.`);
      }
      break;
    }

    default:
  }

  // On passe au prochain middleware (ou au reducer).
  next(action);
};

/**
 * Export
 */
export default TrackUsage;
