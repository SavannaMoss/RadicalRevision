import { Injectable }        from '@angular/core';
import { InMemoryDbService } from "angular-in-memory-web-api";
import { Character }         from "../models/character";

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  arrowverseUrl: string   = "https://arrow.fandom.com/wiki/";
  the100Url: string       = "https://the100.fandom.com/wiki/";
  supernaturalUrl: string = "https://supernatural.fandom.com/wiki/";
  riverdaleUrl: string    = "https://riverdale.fandom.com/wiki/";

  constructor() {
  }

  createDb() {
    let characters: Character[] = [
      {
        name: 'Sara Lance',
        show: "DC's Legends of Tomorrow",
        gender: 'Female',
        sexuality: 'Bisexual',
        about: 'Sara Lance is the daughter of Quentin and Dinah Lance, the younger sister of the late Laurel Lance, and the leader of the Legends following the departure of the team\'s founder, Rip Hunter. She is the captain of the Waverider and a member of the Crisis team, as well as a former member of the League of Assassins and Team Arrow. Sara is the wife of Ava Sharpe, the ex-girlfriend of the late Oliver Queen, and the ex-lover of Nyssa al Ghul.',
        link: this.arrowverseUrl + 'Sara_Lance',
        img_src: 'Sara_Lance.png'
      },
      {
        name: 'Ava Sharpe',
        show: "DC's Legends of Tomorrow",
        gender: 'Female',
        sexuality: 'Lesbian',
        about: 'Ava Sharpe (manufactured 2213) is the twelfth genetically-engineered Advanced Variant Automation clone that Rip Hunter recruited to work for the Time Bureau. She later became the director of the Time Bureau after Grodd killed her predecessor, Wilbur Bennett, soon joining the Legends. Ava is also the wife of Sara Lance.',
        link: this.arrowverseUrl + 'Ava_Sharpe',
        img_src: 'Ava_Sharpe.png'
      },
      {
        name: 'Leonard Snart',
        show: "DC's Legends of Tomorrow",
        gender: 'Male',
        sexuality: 'Pansexual',
        about: 'Leonard "Lenny" Snart, nicknamed Captain Cold by Cisco Ramon, was a world-class thief from Central City. He was also the older brother of Lisa Snart and the estranged son of the late Lewis Snart.',
        link: this.arrowverseUrl + 'Leonard_Snart',
        img_src: 'Leonard_Snart.png'
      },
      {
        name: 'Charlie',
        show: "DC's Legends of Tomorrow",
        gender: 'Genderfluid (Transgender)',
        sexuality: 'Pansexual',
        about: 'Clotho, better known as Charlie, is an ancient Greek deity, specifically one of the three Fates, distinguished as the former spinner of the Loom of Fate, a former member of the Legends, and the singer of The Smell.',
        link: this.arrowverseUrl + 'Charlie',
        img_src: 'Charlie.png'
      },
      {
        name: 'John Constantine',
        show: "DC's Legends of Tomorrow",
        gender: 'Male',
        sexuality: 'Bisexual',
        about: 'John Constantine, nicknamed El Diablo (the Devil) by the gangsters of Mexico City, is an exorcist, demonologist, and warlock, self-styled as "master of the dark arts". John is the son of the late Tommy Constantine and the late Mary Anne, the brother of an unnamed woman, and a descendant of Konstentyn. He is also the ex-lover/good friend of Anne Marie Flynn, Sara Lance, and Gary Green, as well as the ex-boyfriend of Desmond, the late Natalie Logue, and Zari Tarazi. Having been raised by an abusive father since John\'s mother died in childbirth, he grew up highly cynical and cunning, soon developing an interest in the dark arts.',
        link: this.arrowverseUrl + 'John_Constantine',
        img_src: 'John_Constantine.png'
      },
      {
        name: 'Gary Green',
        show: "DC's Legends of Tomorrow",
        gender: 'Male',
        sexuality: 'Bisexual',
        about: 'Gary Green (formerly designated Agent 1066) is a Necrian who is a former agent of the Time Bureau, and the former assistant and the ex-lover of John Constantine. He answered directly to Director Ava Sharpe.',
        link: this.arrowverseUrl + 'Gary_Green',
        img_src: 'Gary_Green.png'
      },
      {
        name: 'Gwyn Davies',
        show: "DC's Legends of Tomorrow",
        gender: 'Male',
        sexuality: 'Gay',
        about: 'Dr. Gwyn Davies is a scientist known for laying the foundation of time travel. He resided in New York City, until being recruited by the Legends to help them get back to the present.',
        link: this.arrowverseUrl + 'Gwyn_Davies',
        img_src: 'Gwyn_Davies.png'
      },
      {
        name: 'Desmond',
        show: "DC's Legends of Tomorrow",
        gender: 'Male',
        sexuality: 'Gay',
        about: 'Desmond, nicknamed Des by John Constantine, is a barkeep in New Orleans. There, he met Constantine and the two formed a relationship. He later broke up with John after being freed from Neron due to being sent to Hell.',
        link: this.arrowverseUrl + 'Desmond',
        img_src: 'Desmond.png'
      },
      {
        name: 'Nora West-Allen',
        show: "The Flash",
        gender: 'Female',
        sexuality: 'Lesbian',
        about: 'Nora West-Allen, nicknamed XS by her mother, Iris West-Allen, is a meta-human speedster and a time traveler from a possible future. She is the daughter of Barry Allen and Iris West-Allen as well as the older sister of Bart Allen.',
        link: this.arrowverseUrl + 'Nora_West-Allen',
        img_src: 'Nora_West-Allen.png'
      },
      {
        name: 'David Singh',
        show: "The Flash",
        gender: 'Male',
        sexuality: 'Gay',
        about: 'Chief David Singh is the chief of police of the Central City Police Department and the husband of Rob.',
        link: this.arrowverseUrl + 'David_Singh',
        img_src: 'David_Singh.png'
      },
      {
        name: 'Hartley Rathaway',
        show: "The Flash",
        gender: 'Male',
        sexuality: 'Gay',
        about: 'Hartley Rathaway, self-styled as Pied Piper, is the son of Rachel and Osgood Rathaway, a former employee of S.T.A.R. Labs, he was fired by Harrison Wells for trying to stop the activation of the particle accelerator, which he\'d discovered was at risk of exploding. After being affected by the particle accelerator and gaining the ability to hear at superhuman levels, Hartley attempted to get revenge on Wells for firing him by trying to kill Barry Allen/The Flash, believing Wells to have replaced him with the Flash.',
        link: this.arrowverseUrl + 'Hartley_Rathaway',
        img_src: 'Hartley_Rathaway.png'
      },
      {
        name: 'Spencer Young',
        show: "The Flash",
        gender: 'Female',
        sexuality: 'Lesbian',
        about: 'Spencer Young is a former blogger who reported on meta-humans in her blog, Spyn Zone. After her phone was enhanced with dark matter during the Enlightenment, she used its powers to "create" news in an effort to make herself famous before being stopped and arrested by the Flash. Spencer\'s crimes brought meta-tech to Team Flash\'s attention.',
        link: this.arrowverseUrl + 'Spencer_Young',
        img_src: 'Spencer_Young.png'
      },
      {
        name: 'Alex Danvers',
        show: "Supergirl",
        gender: 'Female',
        sexuality: 'Lesbian',
        about: 'Dr. Alexandra "Alex" Danvers is a bio-engineer and former director of the D.E.O. She is the daughter of Eliza Danvers and the late Jeremiah Danvers, the adoptive sister of Kara Danvers, the ex-fiancée of Maggie Sawyer, and the wife of Kelly Olsen. She is also a close friend of J\'onn J\'onzz and a good friend of James Olsen, Lena Luthor, Samantha Arias, Nia Nal, Winn Schott and Querl Dox/Brainiac-5.',
        link: this.arrowverseUrl + 'Alex_Danvers',
        img_src: 'Alex_Danvers.png'
      },
      {
        name: 'Maggie Sawyer',
        show: "Supergirl",
        gender: 'Female',
        sexuality: 'Lesbian',
        about: 'Detective Margarita "Maggie" Sawyer is a police detective of the National City Police Department and a member of the Science Police. She is also the estranged daughter of Oscar Rodas and an unnamed woman, the niece of an unnamed woman and the ex-fiancée of Alex Danvers.',
        link: this.arrowverseUrl + 'Maggie_Sawyer',
        img_src: 'Maggie_Sawyer.png'
      },
      {
        name: 'Nia Nal',
        show: "Supergirl",
        gender: 'Female (Transgender)',
        sexuality: 'Heterosexual',
        about: 'Nia Nal is a human-Naltorian hybrid, a reporter of CatCo Worldwide Media, and former political speechwriter. She is also the daughter of Paul Nal and the late Isabel Nal, the younger sister of Maeve Nal, the girlfriend of Querl Dox, and a good friend of Kara Danvers, Alex Danvers, and J\'onn J\'onzz.',
        link: this.arrowverseUrl + 'Nia_Nal',
        img_src: 'Nia_Nal.png'
      },
      {
        name: 'Kelly Olsen',
        show: "Supergirl",
        gender: 'Female',
        sexuality: 'Lesbian',
        about: 'Dr. Kelly Olsen is a brilliant psychologist specializing in trauma and a former soldier of the U.S. Army. Kelly is also the sister of James Olsen, the fiancée of a late unnamed woman, and the wife of Alex Danvers. After moving to National City, she was hired by Obsidian North and helped them to develop a way to use their VR system to cope with traumas. After seeing her community being ignored by the city, Kelly wished to help, so she decided to become the new Guardian.',
        link: this.arrowverseUrl + 'Kelly_Olsen',
        img_src: 'Kelly_Olsen.png'
      },
      {
        name: 'William Clayton',
        show: "Arrow",
        gender: 'Male',
        sexuality: 'Gay',
        about: 'Wlliam Clayton is the son of the late Oliver Queen and the late Samantha Clayton, the step-son of Felicity Smoak, the older paternal half-brother of Mia Queen, the grandson of Frank and Irene Clayton and Robert and Moira Queen, and the nephew of Emiko Adachi and Thea Queen.',
        link: this.arrowverseUrl + 'William_Clayton',
        img_src: 'William_Clayton.png'
      },
      {
        name: 'Nyssa al Ghul',
        show: "Arrow",
        gender: 'Female',
        sexuality: 'Lesbian',
        about: 'Nyssa Raatko, better known as Nyssa al Ghul, is a former member of the League of Assassins and an ally of Team Arrow. Nyssa is also the daughter of the late "Ra\'s al Ghul" and the late Amina Raatko, the younger paternal half-sister of Talia al Ghul, and the younger maternal half-sister of Saracon. She is also the ex-lover of Sara Lance and the former mentor/close friend of the late Laurel Lance.',
        link: this.arrowverseUrl + 'Nyssa_al_Ghul',
        img_src: 'Nyssa_al_Ghul.png'
      },
      {
        name: 'Curtis Holt',
        show: "Arrow",
        gender: 'Male',
        sexuality: 'Gay',
        about: 'Dr. Curtis Holt is the husband of Nick Anastas, a bronze medal Olympic athlete and a former employee of Palmer Technologies who worked alongside then-CEO Felicity Smoak in the Design Innovations department. After learning of Green Arrow\'s secret identity and the location of the Arrowcave, he joined Team Arrow as maintenance and tech support.',
        link: this.arrowverseUrl + 'Curtis_Holt',
        img_src: 'Curtis_Holt.png'
      },
      {
        name: 'Paul Holt',
        show: "Arrow",
        gender: 'Male',
        sexuality: 'Gay',
        about: 'Paul Holt is the ex-husband of Curtis Holt and a physical therapist.',
        link: this.arrowverseUrl + 'Paul_Holt',
        img_src: 'Paul_Holt.png'
      },
      {
        name: 'Nick Anastas',
        show: "Arrow",
        gender: 'Male',
        sexuality: 'Gay',
        about: 'Officer Nick Anastas is the husband of Curtis Holt and a police officer of the Star City Police Department.',
        link: this.arrowverseUrl + 'Nick_Anastas',
        img_src: 'Nick_Anastas.png'
      },
      {
        name: 'Ryan Wilder',
        show: "Batwoman",
        gender: 'Female',
        sexuality: 'Lesbian',
        about: 'Ryan Wilder is the daughter of Jada Jet and a late unnamed man, the younger estranged maternal half-sister of Marquis Jet, and the adoptive daughter of the late Cora Lewis.',
        link: this.arrowverseUrl + 'Ryan_Wilder',
        img_src: 'Ryan_Wilder.png'
      },
      {
        name: 'Sophie Moore',
        show: "Batwoman",
        gender: 'Female',
        sexuality: 'Lesbian',
        about: 'Sophie Moore is the former second-in-command of Crows Security. She is also the estranged daughter of Diane Moore, the older sister of Jordan Moore, the separated wife of Tyler, the ex-girlfriend of Kate Kane, and the former partner/ex-girlfriend of Julia Pennyworth.',
        link: this.arrowverseUrl + 'Sophie_Moore',
        img_src: 'Sophie_Moore.png'
      },
      {
        name: 'Kate Kane',
        show: "Batwoman",
        gender: 'Female',
        sexuality: 'Lesbian',
        about: 'Katherine "Kate" Kane is a wealthy individual and aspiring businesswoman, having become the acting owner of Wayne Enterprises, as well as the founder and CEO of the Gotham Pride Real Estate firm, and the former owner and proprietor of the bar known as The Hold Up, before handing all of the aforementioned titles over to Ryan Wilder, her successor. She is the daughter of Jacob Kane and the late Gabi Kane, the twin sister of Beth Kane, the step-daughter of the late Catherine Hamilton-Kane, the step-sister of Mary Hamilton, and the maternal cousin of Bruce Wayne. She is the ex-girlfriend of Sophie Moore, Julia Pennyworth, and Reagan, a close friend of Luke Fox and Kara Danvers, and a former member of the Crisis team.',
        link: this.arrowverseUrl + 'Kate_Kane',
        img_src: 'Kate_Kane.png'
      },
      {
        name: 'Renee Montoya',
        show: "Batwoman",
        gender: 'Female',
        sexuality: 'Lesbian',
        about: 'Renee Montoya is a former police officer of the Gotham City Police Department and the leader of the Rogues unit.',
        link: this.arrowverseUrl + 'Renee_Montoya',
        img_src: 'Renee_Montoya.png'
      },
      {
        name: 'Angelique Martin',
        show: "Batwoman",
        gender: 'Female',
        sexuality: 'Lesbian',
        about: 'Angelique Martin is a childhood friend and the ex-girlfriend of Ryan Wilder, as well as a former member of the False Face Society known as Baby Doll.',
        link: this.arrowverseUrl + 'Angelique_Martin',
        img_src: 'Angelique_Martin.png'
      },
      {
        name: 'Evan Blake',
        show: "Batwoman",
        gender: 'Non-binary (Transgender)',
        sexuality: 'Gay',
        about: 'Evan Blake is an art thief known as Wolf Spider and an old friend of Kate Kane.',
        link: this.arrowverseUrl + 'Evan_Blake',
        img_src: 'Evan_Blake.png'
      },
      {
        name: 'Julia Pennyworth',
        show: "Batwoman",
        gender: 'Female',
        sexuality: 'Lesbian',
        about: 'Julia Pennyworth is a disavowed spy of the Special Reconnaissance Regiment, known under the code-name Tuxedo One. She is the daughter of Alfred Pennyworth, the goddaughter of the late Lucius Fox, a longtime friend of Bruce Wayne and Luke Fox, and the ex-girlfriend/close friend of Kate Kane and Sophie Moore.',
        link: this.arrowverseUrl + 'Julia_Pennyworth',
        img_src: 'Julia_Pennyworth.png'
      },
      {
        name: 'Parker Torres',
        show: "Batwoman",
        gender: 'Female',
        sexuality: 'Lesbian',
        about: 'Parker Torres is a student of Gotham Prep and reformed cyberterrorist. After being disowned by her parents for being a lesbian, she took on the moniker Terrier and blackmailed every citizen of Gotham City for their secrets, leading to her encountering Batwoman and Alice. Batwoman eventually revealed her true identity and sexuality to Parker, becoming her role model. She was later let off for her crimes in exchange for community service.',
        link: this.arrowverseUrl + 'Parker_Torres',
        img_src: 'Parker_Torres.png'
      },
      {
        name: 'Safiyah Sohail',
        show: "Batwoman",
        gender: 'Female',
        sexuality: 'Queer',
        about: 'Safiyah Sohail is the queen of Coryana and the leader of the Many Arms of Death. Subsequently, she allegedly captured Kate Kane and promised Alice to free her twin sister in exchange for Beth killing Safiyah\'s brother-figure, Ocean.',
        link: this.arrowverseUrl + 'Safiyah_Sohail',
        img_src: 'Safiyah_Sohail.png'
      },
      {
        name: 'Tatiana',
        show: "Batwoman",
        gender: 'Female',
        sexuality: 'Queer',
        about: 'Tatiana was an assassin and the second-in-command of the Many Arms of Death. She was ultimately killed by Beth Kane to protect Ocean from her; not knowing that Tatiana had already completed the assassination.',
        link: this.arrowverseUrl + 'Tatiana',
        img_src: 'Tatiana.png'
      },
      {
        name: 'Anissa Pierce',
        show: "Black Lightning",
        gender: 'Female',
        sexuality: 'Lesbian',
        about: 'Anissa Pierce is the oldest daughter of Jefferson Pierce and Lynn Stewart, the older sister of Jennifer Pierce and the wife of Grace Choi. Shortly after manifesting her powers of strength and invulnerability, she initially began her vigilantism activities working independently until she was recruited by her father and Peter Gambi to join Black Lightning\'s team under the alter-ego Thunder. Later, she used a new vigilante identity called Blackbird.',
        link: this.arrowverseUrl + 'Anissa_Pierce',
        img_src: 'Anissa_Pierce.png'
      },
      {
        name: 'Grace Choi',
        show: "Black Lightning",
        gender: 'Female',
        sexuality: 'Bisexual',
        about: 'Grace Choi (born as Shay Li Wylde) is a woman with a troubled past who grew up in the foster system and was apparently born with a shape-shifting meta-human condition that caused her to live on the run since she was kidnapped by a child prostitution ring at the age of 16. After escaping her captors and changing identity, Grace briefly worked as a bartender at the Ruby Red Lipstick Bar in Freeland, where she met Anissa Pierce, developing an on-again-off-again relationship with her and eventually becoming her fiancée. Grace also began assisting Anissa in her vigilante activities as both Thunder and Blackbird, to the point of becoming an active member of Black Lightning\'s team herself.',
        link: this.arrowverseUrl + 'Grace_Choi',
        img_src: 'Grace_Choi.png'
      },
      {
        name: 'Clarke Griffin',
        show: "The 100",
        gender: 'Female',
        sexuality: 'Bisexual',
        about: 'Clarke was part of the 100, a group of juvenile delinquents from the Ark who were sent to Earth. Prior to being locked up, Clarke was a medical apprentice, following in her mom\'s footsteps, and used those skills to serve as the medic on the ground. After several deaths on the ground, Clarke became a co-leader alongside Bellamy Blake. ',
        link: this.the100Url + 'Clarke_Griffin',
        img_src: 'Clarke_Griffin.png'
      },
      {
        name: 'Lexa',
        show: "The 100",
        gender: 'Female',
        sexuality: 'Lesbian',
        about: 'As the Commander, Lexa had formed the Coalition, uniting the twelve Grounder Clans in a war against the Mountain Men.',
        link: this.the100Url + 'Lexa',
        img_src: 'Lexa.png'
      },
      {
        name: 'Niylah',
        show: "The 100",
        gender: 'Female',
        sexuality: 'Lesbian',
        about: 'Niylah is a Grounder who ran a trading post with her father. She was born to a Trikru father and an Azgeda mother, though she identifies and lived as Trikru. She secretly traded supplies with Clarke during the latter\'s self-exile, and later helped Clarke evade the Azgeda bounty hunters. After A.L.I.E.\'s defeat, she left the trading post and lived in Arkadia for awhile.',
        link: this.the100Url + 'Niylah',
        img_src: 'Niylah.png'
      },
      {
        name: 'Eric Jackson',
        show: "The 100",
        gender: 'Male',
        sexuality: 'Gay',
        about: 'Eric Jackson has a stable friendship and working relationship with Abigail Griffin. He was a medical officer on the Ark. Throughout the series he mostly works as a doctor and helps to treat his patients.',
        link: this.the100Url + 'Eric_Jackson',
        img_src: 'Eric_Jackson.png'
      },
      {
        name: 'Nathan Miller',
        show: "The 100",
        gender: 'Male',
        sexuality: 'Gay',
        about: 'Nathan Miller is part of the original 100. Because of his crime, Miller was considered "expendable" and was chosen as one of the 100 Delinquents to be sent down to Earth to see if it was survivable.',
        link: this.the100Url + 'Nathan_Miller',
        img_src: 'Nathan_Miller.png'
      },
      {
        name: 'Alan J. Corbett',
        show: "Supernatural",
        gender: 'Male',
        sexuality: 'Gay',
        about: 'Alan J. Corbett was a member of the Ghostfacers team until he died at the hands of Freeman Daggett and later became a death echo ghost. He had a crush on Ed Zeddmore, another member of the team.',
        link: this.supernaturalUrl + 'Alan_J._Corbett',
        img_src: 'Alan_J_Corbett.png'
      },
      {
        name: 'Castiel',
        show: "Supernatural",
        gender: 'Queer',
        sexuality: 'Queer',
        about: 'Castiel, often shortened to Cas, is a powerful angel of the Lord who was responsible for saving Dean Winchester from Hell, on the archangels\' command. It was his job to help prevent Lilith from breaking the 66 Seals that, once broken, would release Lucifer from his cage in Hell. Once Castiel learned that the angels wished to free Lucifer anyway, he defied his angelic brethren and died trying to help Dean prevent Sam Winchester from breaking the last seal.',
        link: this.supernaturalUrl + 'Castiel',
        img_src: 'Castiel.png'
      },
      {
        name: 'Charlie Bradbury',
        show: "Supernatural",
        gender: 'Female',
        sexuality: 'Lesbian',
        about: 'Charlene "Charlie" Bradbury was a hacker-turned-hunter. She helped Sam and Dean Winchester find out what the Leviathan Dick Roman was searching for. Her name was an alias, and had started a new life at least once before. Initially hired by Richard Roman Enterprises, Dick gave her the assignment to hack Frank Deveraux\'s hard drive. Roman kept her alive since she possessed a certain "spark" that the Leviathans were unable to copy. ',
        link: this.supernaturalUrl + 'Charlie_Bradbury',
        img_src: 'Charlie_Bradbury.png'
      },
      {
        name: 'Chuck Shurley (God)',
        show: "Supernatural",
        gender: 'Male',
        sexuality: 'Bisexual',
        about: 'God, initially known as Chuck Shurley, is an ancient primordial being who created the universe and nearly everything it contains, including the human soul. Amara, his twin sister, is the only entity surpassing his power and, prior to his demise, Death comparable to him in power.',
        link: this.supernaturalUrl + 'Chuck_Shurley',
        img_src: 'Chuck_Shurley.png'
      },
      {
        name: 'Claire Novak',
        show: "Supernatural",
        gender: 'Female',
        sexuality: 'Queer',
        about: 'Claire Novak is the daughter of Jimmy, Castiel\'s true vessel and a hunter. After her father\'s departure, Claire\'s mother went off to find herself and left her in the care of her grandmother.',
        link: this.supernaturalUrl + 'Claire_Novak',
        img_src: 'Claire_Novak.png'
      },
      {
        name: 'Kaia Nieves',
        show: "Supernatural",
        gender: 'Female',
        sexuality: 'Queer',
        about: 'Kaia Nieves was a dreamwalker orphaned as a result of a supernatural tragedy. Although apparently killed by her alternate counterpart, Kaia survived and was trapped in the Bad Place for over two years. As the Bad Place was destroyed by God, she was rescued by the Winchesters and Dark Kaia and departed with Jody Mills for a new life in Sioux Falls.',
        link: this.supernaturalUrl + 'Kaia_Nieves',
        img_src: 'Kaia_Nieves.png'
      },
      {
        name: 'Jack Kline',
        show: "Supernatural",
        gender: 'Non-binary',
        sexuality: 'Unknown',
        about: 'Jack Kline is the son of Lucifer and Kelly Kline. He is the first and only known Nephilim to be sired by an Archangel. Jack was taken in by Sam Winchester and Dean Winchester who would teach him how to master his powers. During this time, Jack played a role in the resurrection of Castiel who he had chosen as his father.',
        link: this.supernaturalUrl + 'Jack_Kline',
        img_src: 'Jack_Kline.png'
      },
      {
        name: 'Britta Beach',
        show: "Riverdale",
        gender: 'Female',
        sexuality: 'Lesbian',
        about: 'Brittania "Britta" Beach is one of the students attending Riverdale High. She\'s also the first female student to join the Riverdale Bulldogs after Archie resurrects the team.',
        link: this.riverdaleUrl + 'Britta_Beach',
        img_src: 'Britta_Beach.png'
      },
      {
        name: 'Charles Smith',
        show: "Riverdale",
        gender: 'Male',
        sexuality: 'Gay',
        about: 'Charles Smith is the illegitimate son of Alice Smith and FP Jones as well as the older half-brother of Jughead, Jellybean, Betty and Polly. He was initially believed to be murdered by Chic, who later stole his identity. However, this proved to be untrue, as Charles was not only alive but also an agent for the FBI, tasked with stopping The Farm.',
        link: this.riverdaleUrl + 'Charles_Smith',
        img_src: 'Charles_Smith.png'
      },
      {
        name: 'Cheryl Blossom',
        show: "Riverdale",
        gender: 'Female',
        sexuality: 'Lesbian',
        about: 'Cheryl Blossom is the daughter of Penelope and the late Clifford Blossom and, as well as the twin sister of the late Jason Blossom, who suffered a tragic demise mysteriously on July 11th.',
        link: this.riverdaleUrl + 'Cheryl_Blossom',
        img_src: 'Cheryl_Blossom.png'
      },
      {
        name: 'Chic',
        show: "Riverdale",
        gender: 'Male',
        sexuality: 'Pansexual',
        about: 'Chic was initially believed to be the eldest child and only son of Alice Cooper, as well as the older half-brother of Betty, Jughead Jones, and Polly Cooper. However, it was revealed that he was merely an impostor. Chic stole Charles Smith\'s identity. Charles was given up for adoption soon after his birth, and his existence was kept secret by Alice, his biological mother, for many years until she agreed with Betty to search for him, welcoming Chic back into their lives.',
        link: this.riverdaleUrl + 'Chic',
        img_src: 'Chic.png'
      },
      {
        name: 'Fangs Fogarty',
        show: "Riverdale",
        gender: 'Male',
        sexuality: 'Bisexual',
        about: 'Fangs Fogarty was a student at Southside High until it was shut down by Mayor McCoy, who deemed that Southside High was a public health hazard, claiming toxic fumes were coming from the "methamphetamine lab" in the basement. Fangs, along with his close friends, Toni Topaz, Jughead Jones, and Sweet Pea, transferred to Riverdale High. He is also a member of the Southside Serpents.',
        link: this.riverdaleUrl + 'Fangs_Fogarty',
        img_src: 'Fangs_Fogarty.png'
      },
      {
        name: 'Joaquin DeSantos',
        show: "Riverdale",
        gender: 'Male',
        sexuality: 'Gay',
        about: 'Joaquin DeSantos was a member of the Southside Serpents who found himself tied between a romantic relationship with the Sheriff\'s son and the mystery of Jason Blossom\'s murder. During this time, he briefly dated Kevin until leaving town before law enforcement could catch up to him for his involvement in Jason\'s murder. He later returned to Riverdale after getting a call from FP that Fangs, a fellow Serpent, had gotten himself wrapped up in the murder investigation of Midge Klump, which ultimately resulted in Joaquin being imprisoned at Leopold and Loeb Juvenile Detention Center, from where he would later escape, only to be murdered by Tall Boy.',
        link: this.riverdaleUrl + 'Joaquin_DeSantos',
        img_src: 'Joaquin_DeSantos.png'
      },
      {
        name: 'Kevin Keller',
        show: "Riverdale",
        gender: 'Male',
        sexuality: 'Gay',
        about: 'Kevin Keller was senior at Riverdale High School and the best friend of Betty Cooper. Along with that, he had become Veronica\'s G.B.F. (gay best friend). Kevin would often struggle with his sexuality, as he didn\'t have the same options as his friends did. This often caused Kevin to act recklessly at times. He dated Joaquin, as well as Moose Mason, but Joaquin left Riverdale, forcing their break-up and Moose was unwilling to be "out" like Kevin, forcing him to resort to other means in order to feel something. Not long after, he met Fangs Fogarty when the students of Southside High were transferred to Riverdale. This ultimately resulted in the two bonding over time.',
        link: this.riverdaleUrl + 'Kevin_Keller',
        img_src: 'Kevin_Keller.png'
      },
      {
        name: 'Mary Andrews',
        show: "Riverdale",
        gender: 'Female',
        sexuality: 'Bisexual',
        about: 'Mary Andrews is Archie\'s mother and the widow of the late Fred Andrews. They separated, and Mary moved to Chicago, but the divorce never carried through, as Fred unexpectedly passed away. She returned to Riverdale upon Fred\'s passing and assumed legal guardianship of Archie until he left for basic training and she sold the house.',
        link: this.riverdaleUrl + 'Mary_Andrews',
        img_src: 'Mary_Andrews.png'
      },
      {
        name: 'Melody Valentine',
        show: "Riverdale",
        gender: 'Female',
        sexuality: 'Lesbian',
        about: 'Melody Valentine was a student at Riverdale High School and a member of Josie and the Pussycats. She and Valerie left after learning Josie secretly decided to become a "solo diva." She was mainly seen on the drums during their practices and performances. Melody and Valerie briefly reformed the band with Veronica as the lead singer, taking up the new name "Veronica and the Pussycats."',
        link: this.riverdaleUrl + 'Melody_Valentine',
        img_src: 'Melody_Valentine.png'
      },
      {
        name: 'Minerva Marble',
        show: "Riverdale",
        gender: 'Female',
        sexuality: 'Bisexual',
        about: 'Minerva Marble is a persuasive art appraiser.',
        link: this.riverdaleUrl + 'Minerva_Marble',
        img_src: 'Minerva_Marble.png'
      },
      {
        name: 'Moose Mason',
        show: "Riverdale",
        gender: 'Male',
        sexuality: 'Bisexual',
        about: 'Marmaduke "Moose" Mason was a student at Riverdale High School and a member of the varsity football team, the Riverdale Bulldogs. He is bisexual and has a relationship with Kevin Keller. However, Moose\'s reluctance to come out prevented this relationship from ever truly developing. Although they did date for a time, in secret in season 3.',
        link: this.riverdaleUrl + 'Moose_Mason',
        img_src: 'Moose_Mason.png'
      },
      {
        name: 'Toni Topaz',
        show: "Riverdale",
        gender: 'Female',
        sexuality: 'Bisexual',
        about: 'Antoinette "Toni" Topaz is the leader of Southside Serpents — the Serpent Queen. Prior to leading the gang, during her adolescence, Toni was merely a member, one of many. During her sophomore year, she met Jughead and acted as his guide into the world of the Serpents after he transferred to Southside High and re-opened the school\'s newspaper, The Red and Black, for which he recruited Toni as the school photographer. However, that venture ended with the closing of Southside High.',
        link: this.riverdaleUrl + 'Toni_Topaz',
        img_src: 'Toni_Topaz.png'
      }
    ];

    return {characters};
  }
}
