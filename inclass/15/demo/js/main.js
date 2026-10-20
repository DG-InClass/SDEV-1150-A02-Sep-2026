// TODO: Add imports
import { setupClickEvents } from './clickEvents.js';
import { setupHoverCard } from './hoverCard.js';
import { setupKeyboardEvents } from './keyboardEvents.js';
import { setupListDelegation } from './listDelegation.js';
import { setupPanoramaPanels } from './panoramaPanels.js';
import { setupPropagationEvents } from './propagationEvents.js';

console.log('Lesson 15 main.js loaded');

// TODO: Call UI setup functions
setupClickEvents();
setupHoverCard();
setupKeyboardEvents();
setupListDelegation();
setupPanoramaPanels();
setupPropagationEvents();
