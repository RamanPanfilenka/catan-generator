// Official Seafarers 5–6 Player 2025 rulebook, pp. 4–12. The same board is used for 5 and 6 players.
export const RULEBOOK56='https://www.catan.com/sites/default/files/2025-03/CN3084%20CATAN%20%E2%80%93%20Seafarers_%205-6%20Player_%20Rulebook.pdf';
export const EXTENSION_MAPS={
 shores:{pages:'4',note:'В книге на 5–6 игроков материк из 30 гексов заполняется случайно. Здесь показан воспроизводимый пример; малые острова и форма материка соответствуют схеме.',rows:[
  'g9 s m m m s o6',
  'o11 s m m m m s s',
  'p8 s m m m m m s b12',
  's m m m m m m s',
  'b4 s m m m m m s w3',
  'l2 s m m m m s s',
  'g5 s m m m s g10']},
 islands:{name:'2. Шесть островов',en:'The Six Islands',pages:'5',description:'Шесть отдельных островов для 5–6 игроков. Стартуйте на одном или двух островах и исследуйте остальные.',rows:[
  'p12 o4 s l6 s o9 p6',
  'l8 o10 s o11 b10 s w3 b10',
  'b11 w9 s p3 l4 s s l4 s',
  's s s s s s s s',
  's b4 s s p8 l10 s l5 w6',
  'l9 w12 s w5 o3 s b8 p9',
  'p5 o6 s p2 s b5 w2']},
 fog:{pages:'6',description:'Два стартовых острова и 18 неизвестных клеток. Скрытый запас: 3 моря, 3 золота, по 2 глины, леса, пастбища и поля, 3 горы и 1 пустыня.',rows:[
  'l10 s f f s l9 w2',
  'p6 s f f f s w5 o12',
  'w12 b4 s f f f s p4 b8',
  'o11 p5 s f f s l6 p3',
  'w6 l3 s f f f s o9 w4',
  'b9 p8 s f f f s b10',
  'b11 o10 s f f s l8']},
 desert:{pages:'7',description:'Расширенная карта с поясом из пяти пустынь, родным островом и неисследованными территориями.',rows:[
  'g4 o6 b11 s l12 w5 o3 b6',
  'l5 p2 d d d d d s s',
  's s s w2 l8 p9 l10 s s g10',
  'o4 l5 w10 b5 p10 l4 b8 s s',
  'p12 w3 b12 o6 b11 o3 w9 s s o8',
  'b9 o11 s s s s s p11 l3',
  'p6 s p8 w2 s g4 s w9']},
 tribe:{pages:'8',description:'Большой центральный остров и внешние территории забытых племён. На внешних территориях нет производственных чисел; порты, очки и карты развития расставляются по книге расширения.',rows:[
  'd d s g g s p p',
  's s s s s s s s s',
  'w3 b5 o11 p8 b4 l10 w4 b3 l8 o5',
  'l11 p12 l5 w10 p5 b9 w2 p9 b10',
  'l6 o4 w9 b8 l11 o3 p4 w6 l3 o6',
  's s s s s s s s s',
  'd d s o b s w g']},
 cloth:{pages:'9',description:'Два родных острова и шесть островков с двенадцатью деревнями. Каждая деревня получает по 5 жетонов ткани; ещё 10 жетонов остаются в общем запасе.',villages:[['2,3','2 / 5'],['2,5','10 / 8'],['3,1','4 / 9'],['3,6','4 / 5'],['4,3','6 / 12'],['4,5','9 / 10']],rows:[
  'l4 p6 b5 w12 b3 p11 w8',
  'w3 l12 s s s s l3 o9',
  'w11 s s d s d s s p3',
  's g s s s s g s',
  'o8 s s d s d s s o2',
  'b9 w2 s s s s p11 o4',
  'p10 l6 o5 l11 l8 w10 b6']},
 pirates:{pages:'10',description:'Пиратские острова для 5–6 игроков. На пятерых фиолетовые стартовые позиции не используются. Начальные корабли, крепости и маршрут пирата расставляются по книге расширения.',rows:[
  'g3 s o6 s s p5 w4 b9',
  's s s s d s o3 b10 l11',
  'g11 d o8 s s s l12 l6 p4 l10',
  's s s d s w6 w4 o5 p8',
  'g11 d o6 s s s p2 p10 b3 p5',
  's s s s d s w11 o9 b8',
  'g3 s o8 s s l9 w5 l4']},
 wonders:{pages:'11',fixedCells:['0,0','5,0','5,8','6,7'],noRedCells:['2,7','3,7'],description:'Расширенная карта «Чудес Катана» с семью чудесами. Особые жетоны и запрещённые стартовые вершины указаны в книге расширения.',rows:[
  'g8 s p10 s w12 s s s',
  's s b11 s l11 s s d d',
  's b2 p5 w6 b5 w3 p8 l11 d s',
  's w9 o3 l4 o6 w10 p9 b10 d',
  's s b8 p5 s b4 l8 o12 s s',
  'g6 s l10 o3 s o9 w4 s l4',
  's o5 l9 s p2 p11 s g6']}
};
export const WORLD56_COUNTS={s:21,g:4,b:7,l:7,p:7,w:7,o:7,d:3};
export const WORLD56_NUMBERS=[2,2,3,3,3,4,4,4,4,5,5,5,5,5,6,6,6,6,6,8,8,8,8,8,9,9,9,9,9,10,10,10,10,11,11,11,11,12,12];
