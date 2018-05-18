/**
 * Code
 */

// Un middleware qui a pour rôle de déterminer pendant combien
// de temps la lumière est restée allumée.
// En fonction de la durée, on déclenchera un effet de bord :
// - si durée > 8h, on envoie une alerte email.
const TrackUsage = store => next => (action) => {
  next(action);
};

/**
 * Export
 */
export default TrackUsage;
