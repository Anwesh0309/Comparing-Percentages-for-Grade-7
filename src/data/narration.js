// Narration Script Dictionary
// Every string here is spoken word-for-word by the ElevenLabs voice (see scripts/generate_audio.js).
// CONTENT POLICY: only paragraph text and questions are narrated. Titles / headings / labels are NEVER narrated.
// Story slide narration is taken straight from storySlides.js so that the on-screen text and the audio can never drift apart.
import { storySlides } from './storySlides.js';

const storyNarration = {};
storySlides.forEach((slide, i) => {
  storyNarration[`story_slide_${i + 1}`] = slide.narrative;
});

export const narrationScript = {
  // Intro & Wonder Phase
  home_intro: "Welcome to Comparing Percentages! Ready to compare percents and find out who really wins? Let's roll!",
  wonder_prompt: "Robo scored 18 out of 20 on Quiz A. Alex scored 40 out of 50 on Quiz B. Alex says: I got 40 points and Robo got only 18, so my score is better. Bigger number, bigger score! Is that actually true? Remember, to compare fairly, turn every score into a percent, a number out of 100!",
  wonder_teaser: "What if we put both scores on the same 100 point ruler? Who would be ahead then?",

  // Story Phase - 4 Slides (paragraph text only, matched to on-screen text)
  ...storyNarration,

  // Simulate Phase Stations
  station_a_intro: "Welcome to the Percent Grid Lab! Drag across each grid to shade squares. Watch the percent update live and see which grid is greater. Then switch on real amounts to discover why the whole matters!",
  station_b_intro: "Time for the Percent Sorter! Tap the cards from smallest to largest. Fractions, decimals, and percents are all mixed up, so change each one into a percent to sort them fairly!",
  station_c_intro: "Welcome, Detective! Two shops are having a sale. Work out how much money each shop saves you, then crack the case: which deal is really better?",
  station_d_intro: "Welcome to the Real-World Percent Lab! Try quiz scores, basketball shots, phone batteries, and game downloads. Change the scores and totals, and see who is really ahead on the same 100 percent ruler!",

  // Practice & Session Narrations
  practice_welcome: "Choose your world on the map! Beat each world to unlock the next. Earn stars and XP!",
  correct_cheer: "Awesome job! You got it right!",
  incorrect_try_again: "Not quite. Remember, to compare fairly, turn everything into a percent, out of 100!",
  out_of_hearts: "Oh no! Out of hearts! Don't worry, try again to master this world!",
  world_complete: "Congratulations! You completed the world and earned new stars!",

  // Reflect Phase Narrations
  reflect_intro: "Amazing work! Let's reflect on what you learned.",
  reflect_q1: "What does the word percent mean?",
  reflect_a1: "Percent means out of 100! So 45% is 45 out of 100, which is the fraction 45/100 or the decimal 0.45.",
  reflect_q2: "How do you compare a fraction, a decimal, and a percent?",
  reflect_a2: "Change them all into percents first. Then the biggest percent is the greatest value!",
  reflect_q3: "How do you change a fraction into a percent?",
  reflect_a3: "Make the bottom number 100, or divide the top by the bottom and multiply by 100. For example, 3/5 is 60/100, which is 60%!",
  reflect_q4: "Does a bigger percent always mean a bigger amount?",
  reflect_a4: "No! Always find the amount for each one. 30% of 80 is 24, which is more than 50% of 20, which is only 10.",
  reflect_q5: "How do you compare two scores that have different totals?",
  reflect_a5: "Turn each score into a percent. 18 out of 20 is 90%, and 40 out of 50 is 80%, so 18 out of 20 is the better score!",
  reflect_q6: "What is the difference between percentage points and percent change?",
  reflect_a6: "Percentage points are the gap between two percents. Going from 40% to 50% is 10 percentage points, but it is a 25% increase, because 10 is a quarter of 40!",
};

export default narrationScript;
