import React from 'react';

function Star({empty, className, id}) {
  return (
    <label for={id} className = {className}>
      {empty? 
      <svg xmlns="http://www.w3.org/2000/svg" width="16.228" height="15.52" viewBox="0 0 16.228 15.52">
        <g id="star" transform="translate(-0.001 -1.047)" fill="none">
          <path d="M8.9,1.534l1.83,3.709a.874.874,0,0,0,.658.478l4.093.595a.874.874,0,0,1,.484,1.49L13,10.693a.874.874,0,0,0-.251.774l.7,4.076a.874.874,0,0,1-1.268.921L8.522,14.54a.875.875,0,0,0-.813,0L4.047,16.464a.874.874,0,0,1-1.268-.921l.7-4.076a.874.874,0,0,0-.251-.774L.265,7.806A.874.874,0,0,1,.75,6.316l4.093-.595A.874.874,0,0,0,5.5,5.243l1.83-3.709A.874.874,0,0,1,8.9,1.534Z" stroke="none"/>
          <path d="M 8.114811897277832 2.205972671508789 L 6.397722244262695 5.685238838195801 C 6.124701499938965 6.23854923248291 5.597122192382812 6.62177848815918 4.986691474914551 6.710338592529297 L 1.146556854248047 7.268368721008301 L 3.925361633300781 9.976968765258789 C 4.367112159729004 10.40782928466797 4.568422317504883 11.02798843383789 4.463932037353516 11.63538932800293 L 3.808030128479004 15.46027946472168 L 7.2430419921875 13.65446853637695 C 7.510791778564453 13.51381874084473 7.812241554260254 13.43947887420654 8.114811897277832 13.43947887420654 C 8.417362213134766 13.43947887420654 8.718801498413086 13.51381874084473 8.986871719360352 13.65461921691895 L 12.42160034179688 15.46028900146484 L 11.76578140258789 11.63592910766602 C 11.66119194030762 11.02801895141602 11.86249160766602 10.4078483581543 12.30448150634766 9.976768493652344 L 15.0830545425415 7.268369674682617 L 11.24317169189453 6.710369110107422 C 10.63250160217285 6.62177848815918 10.10492134094238 6.23854923248291 9.831932067871094 5.685308456420898 L 8.114811897277832 2.205972671508789 M 8.114684104919434 1.046751022338867 C 8.426332473754883 1.046751022338867 8.738021850585938 1.20915412902832 8.898311614990234 1.533958435058594 L 10.72867202758789 5.242749214172363 C 10.8559513092041 5.500699043273926 11.10205173492432 5.679429054260254 11.38674163818359 5.720728874206543 L 15.47975158691406 6.315508842468262 C 16.19672203063965 6.419768333435059 16.48277282714844 7.300588607788086 15.96416187286377 7.805989265441895 L 13.00248146057129 10.69285869598389 C 12.79666137695312 10.89359855651855 12.70255184173584 11.18302917480469 12.75130176544189 11.46636867523193 L 13.45034217834473 15.5427885055542 C 13.5728816986084 16.2567195892334 12.82341194152832 16.80104827880859 12.1822624206543 16.46422958374023 L 8.521541595458984 14.53975868225098 C 8.266971588134766 14.40604877471924 7.962653160095215 14.40604877471924 7.70808219909668 14.53975868225098 L 4.047362327575684 16.46422958374023 C 3.406214714050293 16.80138778686523 2.656741142272949 16.2567195892334 2.779281616210938 15.5427885055542 L 3.47832202911377 11.46636867523193 C 3.527061462402344 11.18302917480469 3.432961463928223 10.89359855651855 3.227142333984375 10.69285869598389 L 0.2654619216918945 7.805989265441895 C -0.2531490325927734 7.300249099731445 0.03290176391601562 6.419428825378418 0.7498722076416016 6.315508842468262 L 4.84288215637207 5.720728874206543 C 5.127572059631348 5.679429054260254 5.373671531677246 5.500699043273926 5.500951766967773 5.242749214172363 L 7.33131217956543 1.533958435058594 C 7.491432189941406 1.20915412902832 7.803036689758301 1.046751022338867 8.114684104919434 1.046751022338867 Z" stroke="none" fill="#aaa"/>
        </g>
      </svg>
      :
      <svg xmlns="http://www.w3.org/2000/svg" width="16.228" height="15.52" viewBox="0 0 16.228 15.52">
    <path id="star" d="M8.9,1.534l1.83,3.709a.874.874,0,0,0,.658.478l4.093.595a.874.874,0,0,1,.484,1.49L13,10.693a.874.874,0,0,0-.251.774l.7,4.076a.874.874,0,0,1-1.268.921L8.522,14.54a.875.875,0,0,0-.813,0L4.047,16.464a.874.874,0,0,1-1.268-.921l.7-4.076a.874.874,0,0,0-.251-.774L.265,7.806A.874.874,0,0,1,.75,6.316l4.093-.595A.874.874,0,0,0,5.5,5.243l1.83-3.709A.874.874,0,0,1,8.9,1.534Z" transform="translate(-0.001 -1.047)" fill="#ffcf09"/>
    </svg>}
    </label>

  
 );
}

export default Star;
