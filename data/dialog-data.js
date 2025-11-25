/**
 * 对话时间戳和文本数据 - 从Excel自动生成
 * 包含F_end和M_end时间点以及对应的对话文本
 */

const DIALOG_DATA = {
    "Ses01F_script01_1.mp4": [
        {
            "time": 134.59,
            "type": "M_end",
            "f_text": "To you it is, to me it is, but to your father, you can talk yourself until you are blue in the face.  But there is no grave and there is no body, so where are you?",
            "m_text": "Sit down, Mom.  I want to talk to you.",
            "f_start": 117.8228,
            "m_start": 130.76,
            "f_end": 129.51,
            "m_end": 134.59
        },
        {
            "time": 165.3487,
            "type": "M_end",
            "f_text": "Well I got an idea, but what's your story?",
            "m_text": "I'm going to ask her to marry me.",
            "f_start": 156.1786,
            "m_start": 161.998,
            "f_end": 160.67,
            "m_end": 165.3487
        },
        {
            "time": 172.18,
            "type": "M_end",
            "f_text": "Well that's only your business, Chris.",
            "m_text": "You know it's not just my business.",
            "f_start": 165.6573,
            "m_start": 169.7574,
            "f_end": 169.559,
            "m_end": 172.18
        },
        {
            "time": 236.05,
            "type": "M_end",
            "f_text": "Now you can go on from there if you know where to go, but I'm telling you, I don't know where to go.",
            "m_text": "I don't know why it is, but every time I reach out for something I have to pull back because I am afraid other people will suffer. My whole bloody life, time after time.",
            "f_start": 219.04,
            "m_start": 224.7,
            "f_end": 223.82,
            "m_end": 236.05
        },
        {
            "time": 247.57,
            "type": "M_end",
            "f_text": "I just don't see why.  Have you asked Annie yet?",
            "m_text": "I wanted to get this settled first.",
            "f_start": 241.3769,
            "m_start": 245.2786,
            "f_end": 245.1904,
            "m_end": 247.57
        },
        {
            "time": 321.98,
            "type": "M_end",
            "f_text": "...and then what's that going to do to your father?  Do you know?  I don't.",
            "m_text": "All right, then, Mom. [BREATHING]",
            "f_start": 312.74,
            "m_start": 318.2868,
            "f_end": 318.2648,
            "m_end": 321.98
        }
    ],
    "Ses01F_script01_2.mp4": [
        {
            "time": 82.65,
            "type": "M_end",
            "f_text": "Because she knows what I know, that's why.  She's faithful as a rock.  In my darkest moments, I think of her waiting and I know that I'm right.",
            "m_text": "Hey look, it's a nice day, huh?  Why are we arguing?",
            "f_start": 67.48,
            "m_start": 78.38,
            "f_end": 78.26,
            "m_end": 82.65
        },
        {
            "time": 147.51,
            "type": "M_end",
            "f_text": "I can't help it.",
            "m_text": "What have I got to hide?  What the hell is the matter with you, Kate?",
            "f_start": 137.98,
            "m_start": 140.92,
            "f_end": 140.69,
            "m_end": 147.51
        }
    ],
    "Ses01F_script01_3.mp4": [
        {
            "time": 63.9,
            "type": "M_end",
            "f_text": "Sort of embarrassed ever since I got here.",
            "m_text": "Well I was kind of planning of sneaking up on you over the course of a week or so.  They just take it for granted that we're all set.",
            "f_start": 49.1,
            "m_start": 54.62,
            "f_end": 53.9831,
            "m_end": 63.9
        },
        {
            "time": 69.8648,
            "type": "M_end",
            "f_text": "I knew they would.",
            "m_text": "You did?",
            "f_start": 63.01,
            "m_start": 67.6792,
            "f_end": 65.8944,
            "m_end": 69.8648
        },
        {
            "time": 87.25,
            "type": "M_end",
            "f_text": "Well sure, from your mother's point of view.  Why else would I come?",
            "m_text": "So would you want to?  I mean, I guess you have to know that's kind of why I asked you to come?",
            "f_start": 69.64,
            "m_start": 78.08,
            "f_end": 75.91,
            "m_end": 87.25
        },
        {
            "time": 147.379,
            "type": "M_end",
            "f_text": "Chris, I've been ready a long, long, time.",
            "m_text": "And he's gone forever?  Are you sure?",
            "f_start": 137.289,
            "m_start": 142.91,
            "f_end": 142.2065,
            "m_end": 147.379
        },
        {
            "time": 153.5714,
            "type": "M_end",
            "f_text": "I almost got married two years ago.",
            "m_text": "Why didn't you?",
            "f_start": 146.98,
            "m_start": 151.03,
            "f_end": 150.5845,
            "m_end": 153.5714
        },
        {
            "time": 201.4,
            "type": "M_end",
            "f_text": "Not like that you're not.",
            "m_text": "I kissed you.",
            "f_start": 196.14,
            "m_start": 199.1,
            "f_end": 198.895,
            "m_end": 201.4
        },
        {
            "time": 220.04,
            "type": "M_end",
            "f_text": "Chris, what is it?",
            "m_text": "Hey, let's drive some place.  Huh?  Let's get out of here.",
            "f_start": 212.5813,
            "m_start": 216.48,
            "f_end": 215.67,
            "m_end": 220.04
        },
        {
            "time": 247.52,
            "type": "M_end",
            "f_text": "You've got to tell me.",
            "m_text": "I don't even know how to start.",
            "f_start": 240.62,
            "m_start": 243.83,
            "f_end": 243.65,
            "m_end": 247.52
        },
        {
            "time": 259.73,
            "type": "M_end",
            "f_text": "It wouldn't work like this.",
            "m_text": "It's just all mixed up with so many other things, you know?  You know overseas I was in command of a company?",
            "f_start": 247.48,
            "m_start": 251.5,
            "f_end": 250.62,
            "m_end": 259.73
        },
        {
            "time": 460.28,
            "type": "M_end",
            "f_text": "Even me.  And your money?  Chris, there's nothing wrong in your money.  Your father put hundreds of planes into the air, you should be proud of that.  A man should be paid for that.",
            "m_text": "Annie, Annie.  I am going to make a fortune for you.",
            "f_start": 432.557,
            "m_start": 451.04,
            "f_end": 450.47,
            "m_end": 460.28
        }
    ],
    "Ses01F_script02_1.mp4": [
        {
            "time": 327.0891,
            "type": "M_end",
            "f_text": "That's the wind.",
            "m_text": "So what do you think?",
            "f_start": 321.21,
            "m_start": 324.15,
            "f_end": 323.82,
            "m_end": 327.0891
        }
    ],
    "Ses01F_script02_2.mp4": [
        {
            "time": 56.09,
            "type": "M_end",
            "f_text": "I'm sorry, it's just fish to me.",
            "m_text": "Carla, can I ask you something?  Now, don't take this the wrong way, but are you on your period?",
            "f_start": 45.42,
            "m_start": 49.2,
            "f_end": 49.0894,
            "m_end": 56.09
        },
        {
            "time": 94.8877,
            "type": "M_end",
            "f_text": "Twice is every time we have tried; that's ever.",
            "m_text": "They'll show up this time.",
            "f_start": 87.71,
            "m_start": 91.5046,
            "f_end": 91.3205,
            "m_end": 94.8877
        },
        {
            "time": 221.895,
            "type": "M_end",
            "f_text": "Drinking champagne from the bottle,",
            "m_text": "It's when we were driving past that Knickerbocker Liquor Locker, you said, let's get some champagne.  I said no, time's a wasting or something like that.",
            "f_start": 206.42,
            "m_start": 211.34,
            "f_end": 209.26,
            "m_end": 221.895
        },
        {
            "time": 377.1344,
            "type": "M_end",
            "f_text": "I didn't say that.",
            "m_text": "I just- I know I don't make you happy.",
            "f_start": 368.63,
            "m_start": 373.51,
            "f_end": 370.8,
            "m_end": 377.1344
        },
        {
            "time": 412.79,
            "type": "M_end",
            "f_text": "You're the one who probably wishes he was with somebody else.  Somebody who doesn't take things so seriously, who could enjoy herself.",
            "m_text": "You know, actually now that you mention it, no I don't.",
            "f_start": 394.9704,
            "m_start": 406.01,
            "f_end": 404.96,
            "m_end": 412.79
        },
        {
            "time": 423.7152,
            "type": "M_end",
            "f_text": "So maybe we are in the wrong spot, but we are with the right person.",
            "m_text": "I don't know, it seemed like such a good spot to me.",
            "f_start": 413.75,
            "m_start": 419.38,
            "f_end": 419.3655,
            "m_end": 423.7152
        }
    ],
    "Ses01F_script03_1.mp4": [
        {
            "time": 39.31,
            "type": "M_end",
            "f_text": "It had to happen sooner or later.",
            "m_text": "Hello?  Hello?  I'm sorry, what's that?",
            "f_start": 28.96,
            "m_start": 33.92,
            "f_end": 32.94,
            "m_end": 39.31
        },
        {
            "time": 195.6,
            "type": "M_end",
            "f_text": "Oh Elliott, worms don't pop.",
            "m_text": "Oh See, I don't care what you do, see.  You can paint yourself green and run naked through the Place Vendome and run off with all of the men of the world.  I shan't say a word, just as long as you love me best.",
            "f_start": 174.8825,
            "m_start": 178.97,
            "f_end": 178.85,
            "m_end": 195.6
        },
        {
            "time": 210.7575,
            "type": "M_end",
            "f_text": "Aw.  Thank you, darling.  The same applies to you too, except that if you so much as look at another woman I'll kill you.",
            "m_text": "Do you remember that awful scene we had in Venice?",
            "f_start": 194.85,
            "m_start": 204.59,
            "f_end": 204.01,
            "m_end": 210.7575
        },
        {
            "time": 276.2,
            "type": "M_end",
            "f_text": "[LAUGHTER] And very much sillier.",
            "m_text": "However I believe the real cause of that row was Peter Burden.",
            "f_start": 262.46,
            "m_start": 271.64,
            "f_end": 269.64,
            "m_end": 276.2
        }
    ],
    "Ses01F_script03_2.mp4": [
        {
            "time": 122.89,
            "type": "M_end",
            "f_text": "No.  I am just making myself fascinating for you.",
            "m_text": "That reply has broken my heart.",
            "f_start": 114.8512,
            "m_start": 119.7,
            "f_end": 119.6,
            "m_end": 122.89
        },
        {
            "time": 235.7308,
            "type": "M_end",
            "f_text": "There are no people upstairs; it's a photographer's studio.",
            "m_text": "Well then you'll wake up the people downstairs.",
            "f_start": 229.4275,
            "m_start": 233.405,
            "f_end": 233.08,
            "m_end": 235.7308
        },
        {
            "time": 263.64,
            "type": "M_end",
            "f_text": "You are far too temperamental, try to control yourself.",
            "m_text": "Turn it off.",
            "f_start": 256.48,
            "m_start": 260.4625,
            "f_end": 260.4175,
            "m_end": 263.64
        },
        {
            "time": 295.3,
            "type": "M_end",
            "f_text": "This is the end.  Do you hear me?  Finally and forever.",
            "m_text": "You're not going like this.",
            "f_start": 287.295,
            "m_start": 293.2325,
            "f_end": 292.72,
            "m_end": 295.3
        }
    ],
    "Ses02F_script01_1.mp4": [
        {
            "time": 53.07,
            "type": "M_end",
            "f_text": "He's dreaming about him again.  He's walking around at night.",
            "m_text": "I guess he is.",
            "f_start": 47.25,
            "m_start": 51.33,
            "f_end": 51.2394,
            "m_end": 53.07
        },
        {
            "time": 64.59,
            "type": "M_end",
            "f_text": "He's getting just like after he died.  What is the meaning of that?",
            "m_text": "I don't know the meaning of it.  But, I know one thing Mom, we made a terrible mistake with Dad.",
            "f_start": 52.76,
            "m_start": 58.6,
            "f_end": 58.25,
            "m_end": 64.59
        },
        {
            "time": 78.96,
            "type": "M_end",
            "f_text": "What you mean dishonest?",
            "m_text": "You know that Larry's not coming back and I know it.  Why do we allow him to go on thinking that we believe with him?",
            "f_start": 70.0,
            "m_start": 72.19,
            "f_end": 71.85,
            "m_end": 78.96
        },
        {
            "time": 141.78,
            "type": "M_end",
            "f_text": "I've got an idea, but what's the story?",
            "m_text": "I'm gonna ask her to marry me.",
            "f_start": 134.54,
            "m_start": 139.31,
            "f_end": 138.67,
            "m_end": 141.78
        },
        {
            "time": 152.16,
            "type": "M_end",
            "f_text": "What do you want me to do?  You're old enough to know your own mind.",
            "m_text": "So it's all right then?",
            "f_start": 147.2,
            "m_start": 150.84,
            "f_end": 150.78,
            "m_end": 152.16
        },
        {
            "time": 289.8709,
            "type": "M_end",
            "f_text": "What the hell is this?",
            "m_text": "I'll get out.  I'll get married and go live some place else.  Maybe New York.",
            "f_start": 281.74,
            "m_start": 283.7607,
            "f_end": 283.66,
            "m_end": 289.8709
        },
        {
            "time": 322.48,
            "type": "M_end",
            "f_text": "Tell me, you'd leave the business?",
            "m_text": "Yes, on this I would.",
            "f_start": 316.25,
            "m_start": 319.97,
            "f_end": 319.83,
            "m_end": 322.48
        },
        {
            "time": 353.43,
            "type": "M_end",
            "f_text": "I don't understand you, do I?",
            "m_text": "No, you don't.  I'm a pretty tough guy.",
            "f_start": 346.56,
            "m_start": 350.05,
            "f_end": 349.87,
            "m_end": 353.43
        }
    ],
    "Ses02F_script01_2.mp4": [
        {
            "time": 44.86,
            "type": "M_end",
            "f_text": "She's not his girl, Joe.  She knows she's not.",
            "m_text": "You can't read her mind.",
            "f_start": 39.75,
            "m_start": 42.92,
            "f_end": 42.84,
            "m_end": 44.86
        },
        {
            "time": 66.82,
            "type": "M_end",
            "f_text": "She knows what I know, that's why.  She's faithful as a rock.  In my worst moments I think of her waiting and I know again that I'm right.",
            "m_text": "Look, it's a nice day.  What are we arguing for?",
            "f_start": 54.71,
            "m_start": 63.92,
            "f_end": 63.76,
            "m_end": 66.82
        }
    ],
    "Ses02F_script01_3.mp4": [
        {
            "time": 21.03,
            "type": "M_end",
            "f_text": "You know, it's lovely here, the air is sweet.",
            "m_text": "You're not sorry you came?",
            "f_start": 14.91,
            "m_start": 19.38,
            "f_end": 18.46,
            "m_end": 21.03
        },
        {
            "time": 57.11,
            "type": "M_end",
            "f_text": "Well, kind of embarrassed ever since I got here.",
            "m_text": "The trouble is, I planned on sort of sneaking up on you over a period of a week or so.  But, they take it for granted that we're all set.",
            "f_start": 41.95,
            "m_start": 47.97,
            "f_end": 46.29,
            "m_end": 57.11
        },
        {
            "time": 71.7,
            "type": "M_end",
            "f_text": "from her point of view, why else would I come?",
            "m_text": "Oh.  Would you want to?  I guess you know, this is why I asked you to come.",
            "f_start": 61.54,
            "m_start": 64.1368,
            "f_end": 64.12,
            "m_end": 71.7
        },
        {
            "time": 87.67,
            "type": "M_end",
            "f_text": "I--I guess this is why I came.",
            "m_text": "Anne, I love you.  I love you a great deal.  I love you.",
            "f_start": 73.59,
            "m_start": 80.35,
            "f_end": 78.04,
            "m_end": 87.67
        },
        {
            "time": 120.31,
            "type": "M_end",
            "f_text": "I almost got married two years ago.",
            "m_text": "Why didn't you?",
            "f_start": 115.79,
            "m_start": 119.1197,
            "f_end": 118.542,
            "m_end": 120.31
        },
        {
            "time": 129.05,
            "type": "M_end",
            "f_text": "Every day since.",
            "m_text": "Anne, why didn't you let me know?",
            "f_start": 124.82,
            "m_start": 127.0,
            "f_end": 126.7,
            "m_end": 129.05
        },
        {
            "time": 140.69,
            "type": "M_end",
            "f_text": "Well, I was waiting for you.  I mean, till then you never wrote and when you did, I mean, what did you say?  You can sure be ambiguous sometimes.",
            "m_text": "Give me a kiss, Anne.  Give me a-",
            "f_start": 129.02,
            "m_start": 138.31,
            "f_end": 138.1,
            "m_end": 140.69
        },
        {
            "time": 170.49,
            "type": "M_end",
            "f_text": "Like Larry's brother.  Do it like you, Chris.  What is it?",
            "m_text": "Let's drive someplace.  I want to be alone with you.",
            "f_start": 160.15,
            "m_start": 167.69,
            "f_end": 166.74,
            "m_end": 170.49
        },
        {
            "time": 176.7,
            "type": "M_end",
            "f_text": "No.  What is it, your mother?",
            "m_text": "No.  Nothing like that.",
            "f_start": 169.81,
            "m_start": 173.5779,
            "f_end": 173.32,
            "m_end": 176.7
        },
        {
            "time": 191.15,
            "type": "M_end",
            "f_text": "Then, what's wrong?  I mean, even in your letters there was some--something ashamed.",
            "m_text": "Yeah, I suppose I have been.  But it's going from me.",
            "f_start": 176.8257,
            "m_start": 186.58,
            "f_end": 185.92,
            "m_end": 191.15
        },
        {
            "time": 196.2,
            "type": "M_end",
            "f_text": "You've gotta tell me.",
            "m_text": "I don't know how to start.",
            "f_start": 191.13,
            "m_start": 193.87,
            "f_end": 193.3241,
            "m_end": 196.2
        },
        {
            "time": 207.24,
            "type": "M_end",
            "f_text": "It wouldn't work this way.",
            "m_text": "It's all mixed up with so many other things.  You remember overseas, I was in command of a company?",
            "f_start": 196.69,
            "m_start": 200.09,
            "f_end": 198.64,
            "m_end": 207.24
        },
        {
            "time": 336.6,
            "type": "M_end",
            "f_text": "You still feel that way?",
            "m_text": "I want you now Annie.",
            "f_start": 331.43,
            "m_start": 334.61,
            "f_end": 333.69,
            "m_end": 336.6
        },
        {
            "time": 357.87,
            "type": "M_end",
            "f_text": "I mean, and your money, there's nothing wrong with your money.  I mean, your father put hundreds of planes in the air.  A man should be paid for that.",
            "m_text": "I know Annie.  Annie, I'm gonna make a fortune for you.",
            "f_start": 344.6,
            "m_start": 353.64,
            "f_end": 353.22,
            "m_end": 357.87
        }
    ],
    "Ses02F_script02_1.mp4": [
        {
            "time": 44.05,
            "type": "M_end",
            "f_text": "What flashlight?",
            "m_text": "You know, the flashlight, the silver one.  There's only one isn't there?",
            "f_start": 39.39,
            "m_start": 41.24,
            "f_end": 40.57,
            "m_end": 44.05
        },
        {
            "time": 102.03,
            "type": "M_end",
            "f_text": "I'm cold.",
            "m_text": "Do you want my jacket?",
            "f_start": 98.29,
            "m_start": 100.6,
            "f_end": 99.77,
            "m_end": 102.03
        },
        {
            "time": 111.82,
            "type": "M_end",
            "f_text": "It's after eleven, let's just go home.",
            "m_text": "Are you kidding?  We'd miss it.  We just got here.  What's the point of coming down here if we just turn around and go home.",
            "f_start": 102.21,
            "m_start": 105.16,
            "f_end": 104.84,
            "m_end": 111.82
        },
        {
            "time": 124.59,
            "type": "M_end",
            "f_text": "So, let's go.",
            "m_text": "No. No. That's not my point.  The point is there's no point in coming down if we just leave.  Don't you want to see it?",
            "f_start": 116.38,
            "m_start": 117.83,
            "f_end": 117.69,
            "m_end": 124.59
        },
        {
            "time": 136.86,
            "type": "M_end",
            "f_text": "I just don't.  It's stupid.",
            "m_text": "Honey, this is a natural phenomenon.  I mean this only happens once a year, you know.",
            "f_start": 127.73,
            "m_start": 130.92,
            "f_end": 130.4,
            "m_end": 136.86
        },
        {
            "time": 170.35,
            "type": "M_end",
            "f_text": "What are you so excited about?  I mean, it's not a moon landing we're talking about here.  It's fish.  It's a fish nobody even eats.",
            "m_text": "Yeah they do.",
            "f_start": 161.39,
            "m_start": 168.72,
            "f_end": 168.6,
            "m_end": 170.35
        },
        {
            "time": 287.87,
            "type": "M_end",
            "f_text": "That's the wind.",
            "m_text": "Well, so what do you think?",
            "f_start": 284.04,
            "m_start": 285.95,
            "f_end": 285.6,
            "m_end": 287.87
        }
    ],
    "Ses02F_script02_2.mp4": [
        {
            "time": 15.53,
            "type": "M_end",
            "f_text": "It's ridiculous.",
            "m_text": "It certainly is not.  It's slightly exaggerated scientific fact.",
            "f_start": 9.5015,
            "m_start": 11.44,
            "f_end": 11.26,
            "m_end": 15.53
        },
        {
            "time": 305.06,
            "type": "M_end",
            "f_text": "I mean, this is just this.  It includes a lot and everything, but it isn't something else.  Do you have any idea what I'm trying to say?",
            "m_text": "I'm doing the best I can.",
            "f_start": 288.24,
            "m_start": 302.93,
            "f_end": 302.74,
            "m_end": 305.06
        },
        {
            "time": 327.93,
            "type": "M_end",
            "f_text": "I know that you meant this to be special and nice and the sand and the moon and all, but I just couldn't help thinking about being somewhere else.",
            "m_text": "Maybe if you were with somebody else too.",
            "f_start": 308.75,
            "m_start": 325.06,
            "f_end": 324.1,
            "m_end": 327.93
        },
        {
            "time": 355.24,
            "type": "M_end",
            "f_text": "You're the one who probably wishes you were with someone else.  Someone who--you'd rather enjoy yourself and didn't take everything so hard.",
            "m_text": "Well, now that you mention it.  No, I don't.",
            "f_start": 342.08,
            "m_start": 350.5661,
            "f_end": 350.2,
            "m_end": 355.24
        },
        {
            "time": 380.21,
            "type": "M_end",
            "f_text": "Yeah, I noticed that.  Looks pretty, doesn't it?  Big ol' white moon.",
            "m_text": "Well, look what we have here.",
            "f_start": 370.64,
            "m_start": 378.28,
            "f_end": 377.73,
            "m_end": 380.21
        },
        {
            "time": 392.08,
            "type": "M_end",
            "f_text": "Well, then we don't need glasses.",
            "m_text": "You still cold?  Do you wanna go home?",
            "f_start": 383.7,
            "m_start": 388.88,
            "f_end": 387.6,
            "m_end": 392.08
        }
    ],
    "Ses02F_script03_1.mp4": [
        {
            "time": 19.59,
            "type": "M_end",
            "f_text": "What're we gonna do?",
            "m_text": "We're all right, darling, aren't we?  Whatever happens.",
            "f_start": 13.77,
            "m_start": 16.9,
            "f_end": 16.24,
            "m_end": 19.59
        },
        {
            "time": 153.49,
            "type": "M_end",
            "f_text": "Elliott, worms don't pop.",
            "m_text": "I don't care what you do.  See, you could paint yourself green and dance naked in the Place Vendome and rush off madly with all the men in the world and I shan't say a word.  As long as you love me best.",
            "f_start": 140.2,
            "m_start": 142.82,
            "f_end": 142.43,
            "m_end": 153.49
        }
    ],
    "Ses02F_script03_2.mp4": [
        {
            "time": 66.64,
            "type": "M_end",
            "f_text": "Don't see why you want any.  You've already had two glasses.",
            "m_text": "No particular reason.  Anyhow they were very small ones.",
            "f_start": 59.41,
            "m_start": 63.2,
            "f_end": 63.13,
            "m_end": 66.64
        },
        {
            "time": 132.63,
            "type": "M_end",
            "f_text": "I don't care, do you understand?  I don't care.  I don't care if they bark or roll about like hoops.",
            "m_text": "Did you see much of Peter Burden after our divorce?",
            "f_start": 122.03,
            "m_start": 128.85,
            "f_end": 127.89,
            "m_end": 132.63
        },
        {
            "time": 196.01,
            "type": "M_end",
            "f_text": "They're away in Tunis.",
            "m_text": "This is no time of the year for Tunis.",
            "f_start": 191.03,
            "m_start": 193.35,
            "f_end": 192.97,
            "m_end": 196.01
        }
    ],
    "Ses03F_script01_1.mp4": [
        {
            "time": 255.3614,
            "type": "M_end",
            "f_text": "There's nothing wrong with it.",
            "m_text": "I didn't ask Annie yet.",
            "f_start": 244.2492,
            "m_start": 251.2833,
            "f_end": 247.3694,
            "m_end": 255.3614
        }
    ],
    "Ses03F_script01_2.mp4": [
        {
            "time": 65.1005,
            "type": "M_end",
            "f_text": "She's waited.",
            "m_text": "How do you know why she's waited?",
            "f_start": 59.8324,
            "m_start": 62.2403,
            "f_end": 62.1235,
            "m_end": 65.1005
        },
        {
            "time": 87.62,
            "type": "M_end",
            "f_text": "I think again, that I'm-I'm right.",
            "m_text": "Look, it's a nice day. What are we arguing for?",
            "f_start": 77.8075,
            "m_start": 83.3475,
            "f_end": 82.4175,
            "m_end": 87.62
        }
    ],
    "Ses03F_script01_3.mp4": [
        {
            "time": 63.6197,
            "type": "M_end",
            "f_text": "Well, you've been embarrassed ever since I came.",
            "m_text": "Yes, I guess I have been. But it's going from me now.",
            "f_start": 51.7594,
            "m_start": 56.2887,
            "f_end": 55.8252,
            "m_end": 63.6197
        },
        {
            "time": 259.2186,
            "type": "M_end",
            "f_text": "But, Chris, it wouldn't work like this.",
            "m_text": "You know when I went overseas. I said I was in command of a company.",
            "f_start": 247.6743,
            "m_start": 253.2779,
            "f_end": 251.8454,
            "m_end": 259.2186
        }
    ],
    "Ses03F_script02_1.mp4": [
        {
            "time": 266.4875,
            "type": "M_end",
            "f_text": "Yes, and if you also remember, I got sand in my panties. We got into an argument about nothing. You got a sore throat and we never saw the grunions.",
            "m_text": "We weren't in a good spot.",
            "f_start": 252.4348,
            "m_start": 263.6497,
            "f_end": 262.5768,
            "m_end": 266.4875
        }
    ],
    "Ses03F_script02_2.mp4": [
        {
            "time": 86.2908,
            "type": "M_end",
            "f_text": "It's not like that.",
            "m_text": "We're not seeing the grunions?",
            "f_start": 77.4436,
            "m_start": 82.9701,
            "f_end": 80.7886,
            "m_end": 86.2908
        },
        {
            "time": 135.9565,
            "type": "M_end",
            "f_text": "Look, I did. I always do. But it's like every time I try nothing ever happens.",
            "m_text": "It's just fish. Nothing to get traumatized over.",
            "f_start": 118.1651,
            "m_start": 130.2604,
            "f_end": 128.2485,
            "m_end": 135.9565
        },
        {
            "time": 205.983,
            "type": "M_end",
            "f_text": "I told myself finally, this is how happy I'm supposed to be.",
            "m_text": "Wait a minute. I got it.",
            "f_start": 196.0935,
            "m_start": 202.2987,
            "f_end": 202.0805,
            "m_end": 205.983
        },
        {
            "time": 406.6577,
            "type": "M_end",
            "f_text": "God, big old white moon.",
            "m_text": "Look what we got here.",
            "f_start": 398.271,
            "m_start": 403.2157,
            "f_end": 401.9,
            "m_end": 406.6577
        },
        {
            "time": 421.1041,
            "type": "M_end",
            "f_text": "At least we won't need glasses.",
            "m_text": "Are you still cold? Do you want to go home?",
            "f_start": 410.7783,
            "m_start": 416.3775,
            "f_end": 414.4869,
            "m_end": 421.1041
        }
    ],
    "Ses03F_script03_1.mp4": [
        {
            "time": 21.42,
            "type": "M_end",
            "f_text": "What are we to do?",
            "m_text": "We're all right, aren't we darling? Whatever happens.",
            "f_start": 14.9625,
            "m_start": 17.04,
            "f_end": 16.93,
            "m_end": 21.42
        },
        {
            "time": 174.37,
            "type": "M_end",
            "f_text": "Thank you, dear. The same applies to you. Except that if I ever so much as catch you looking at another woman I'll kill you.",
            "m_text": "Remember that awful scene we had in Venice?",
            "f_start": 159.3275,
            "m_start": 169.91,
            "f_end": 167.93,
            "m_end": 174.37
        },
        {
            "time": 238.26,
            "type": "M_end",
            "f_text": "Yeah, and very much sillier.",
            "m_text": "Oh, the real cause of that row was Peter Burden.",
            "f_start": 228.0575,
            "m_start": 232.88,
            "f_end": 230.82,
            "m_end": 238.26
        }
    ],
    "Ses03F_script03_2.mp4": [
        {
            "time": 45.52,
            "type": "M_end",
            "f_text": "No, I didn't. You made that up all in your jealous imagination.",
            "m_text": "You must admit that he was in love with you.",
            "f_start": 35.07,
            "m_start": 42.38,
            "f_end": 40.52,
            "m_end": 45.52
        },
        {
            "time": 85.21,
            "type": "M_end",
            "f_text": "I definitely, most definitely am.",
            "m_text": "So am I. Bored stiff. Want some brandy?",
            "f_start": 75.4,
            "m_start": 79.99,
            "f_end": 78.3725,
            "m_end": 85.21
        },
        {
            "time": 136.365,
            "type": "M_end",
            "f_text": "It's a woman's job to allure the man. Watch me, won't you, a minute?",
            "m_text": "As a matter of fact, that's perfectly true.",
            "f_start": 127.4075,
            "m_start": 133.39,
            "f_end": 132.95,
            "m_end": 136.365
        },
        {
            "time": 150.93,
            "type": "M_end",
            "f_text": "No, it's not. I don't care.",
            "m_text": "It's a pity you didn't have more brandy. It might have made you a little less disagreeable.",
            "f_start": 138.8625,
            "m_start": 145.63,
            "f_end": 142.25,
            "m_end": 150.93
        },
        {
            "time": 272.7375,
            "type": "M_end",
            "f_text": "You've always had far too temperamental for yourself. You should try to control it.",
            "m_text": "Turn it off.",
            "f_start": 261.465,
            "m_start": 271.2375,
            "f_end": 268.54,
            "m_end": 272.7375
        }
    ],
    "Ses04F_script01_1.mp4": [
        {
            "time": 49.9924,
            "type": "M_end",
            "f_text": "He cried hard?",
            "m_text": "I could hear him right through the floor of my room.",
            "f_start": 43.83,
            "m_start": 46.46,
            "f_end": 46.26,
            "m_end": 49.9924
        }
    ],
    "Ses04F_script01_3.mp4": [
        {
            "time": 193.6989,
            "type": "M_end",
            "f_text": "It wouldn't work this way.",
            "m_text": "There's so many things mixed up.",
            "f_start": 185.09,
            "m_start": 188.31,
            "f_end": 188.12,
            "m_end": 193.6989
        }
    ],
    "Ses04F_script02_1.mp4": [
        {
            "time": 43.78,
            "type": "M_end",
            "f_text": "What flashlight?",
            "m_text": "The flashlight, the silver one.  There's only one isn't there?",
            "f_start": 37.89,
            "m_start": 40.0699,
            "f_end": 39.636,
            "m_end": 43.78
        }
    ],
    "Ses04F_script02_2.mp4": [
        {
            "time": 29.02,
            "type": "M_end",
            "f_text": "It's PR.  Somebody sold you a bill of goods that this wonderful event is going to take place on the beach.",
            "m_text": "I'm not the only one.  Look at these people.",
            "f_start": 18.39,
            "m_start": 25.92,
            "f_end": 25.72,
            "m_end": 29.02
        },
        {
            "time": 52.98,
            "type": "M_end",
            "f_text": "Well I'm sorry but it's still just fish to me.",
            "m_text": "Carla, can I ask you something?  Don't take this the wrong way but are you having your period?",
            "f_start": 42.42,
            "m_start": 45.921,
            "f_end": 45.89,
            "m_end": 52.98
        },
        {
            "time": 98.65,
            "type": "M_end",
            "f_text": "We totally skipped. Right.",
            "m_text": "There's nothing to it.  We come down here.  The grunions arrive.  They do the little fish business.  We go oh, ah look at the fish.  They go home.  We go home.",
            "f_start": 83.7513,
            "m_start": 89.8722,
            "f_end": 87.95,
            "m_end": 98.65
        },
        {
            "time": 405.77,
            "type": "M_end",
            "f_text": "Yeah, I noticed that.  Looks pretty on the water doesn't it, big old white moon.",
            "m_text": "Well look at what we got here.",
            "f_start": 393.6777,
            "m_start": 401.68,
            "f_end": 401.52,
            "m_end": 405.77
        }
    ],
    "Ses04F_script03_2.mp4": [
        {
            "time": 107.22,
            "type": "M_end",
            "f_text": "Oh, be quiet.",
            "m_text": "It's a pity you don't have anymore brandy.  It might have made you a little less disagreeable.",
            "f_start": 99.06,
            "m_start": 100.84,
            "f_end": 100.66,
            "m_end": 107.22
        },
        {
            "time": 142.07,
            "type": "M_end",
            "f_text": "Mind your own business.",
            "m_text": "You must have had a riotous time.  No restraint at all, very enjoyable, you never had much anyhow.",
            "f_start": 130.86,
            "m_start": 132.9986,
            "f_end": 132.8086,
            "m_end": 142.07
        },
        {
            "time": 174.14,
            "type": "M_end",
            "f_text": "Oh, shut up.",
            "m_text": "They'd get up a splendid little debate about that, you know.  Intemperate tots.",
            "f_start": 166.6,
            "m_start": 169.0502,
            "f_end": 168.77,
            "m_end": 174.14
        },
        {
            "time": 234.01,
            "type": "M_end",
            "f_text": "This is the end do you understand?  The end,",
            "m_text": "You're not going like this.",
            "f_start": 228.3202,
            "m_start": 231.23,
            "f_end": 231.0,
            "m_end": 234.01
        }
    ],
    "Ses05F_script01_1.mp4": [
        {
            "time": 142.21,
            "type": "M_end",
            "f_text": "To you it is, and to me, but not to your father.  Now look, you can talk yourself  blue in the face, but there's no body, and there's no grave, so where are you?",
            "m_text": "Sit down, mom.  I want to talk to you.",
            "f_start": 128.55,
            "m_start": 138.49,
            "f_end": 138.37,
            "m_end": 142.21
        },
        {
            "time": 228.42,
            "type": "M_end",
            "f_text": "Now Chris you can go on from there, but I don't know what to do.  I mean do you know what to do, because I don't.",
            "m_text": "I don't know why it is.  But every time I reach out for something I want, I have to pull back because other people will suffer.  My whole bloody life, time after time, after time.",
            "f_start": 207.47,
            "m_start": 218.66,
            "f_end": 217.98,
            "m_end": 228.42
        },
        {
            "time": 285.95,
            "type": "M_end",
            "f_text": "well, that's a good reason, but it doesn't answer a thing.",
            "m_text": "I can't help it.  I know her best.  I was brought up next door to here, the easiest, when I think of somebody for my wife, I think of Annie.  Do you want a diagram?",
            "f_start": 268.85,
            "m_start": 274.55,
            "f_end": 273.34,
            "m_end": 285.95
        },
        {
            "time": 372.47,
            "type": "M_end",
            "f_text": "Don't- you, you can't think like that!  Don't think like that!",
            "m_text": "Then help me stay here.",
            "f_start": 364.57,
            "m_start": 370.36,
            "f_end": 368.98,
            "m_end": 372.47
        }
    ],
    "Ses05F_script01_2.mp4": [
        {
            "time": 38.31,
            "type": "M_end",
            "f_text": "It's got that about it.",
            "m_text": "Well, so what.",
            "f_start": 33.01,
            "m_start": 35.45,
            "f_end": 35.01,
            "m_end": 38.31
        },
        {
            "time": 111.5,
            "type": "M_end",
            "f_text": "Laugh.  Laugh at me, but what happens the night that she goes to sleep in his bed, and his memorial breaks in pieces?",
            "m_text": "Calm yourself.",
            "f_start": 100.87,
            "m_start": 109.58,
            "f_end": 109.07,
            "m_end": 111.5
        }
    ],
    "Ses05F_script01_3.mp4": [
        {
            "time": 22.3539,
            "type": "M_end",
            "f_text": "It's so lovely here.  The air is sweet.",
            "m_text": "So you're not sorry you came?",
            "f_start": 15.3432,
            "m_start": 20.2306,
            "f_end": 20.1605,
            "m_end": 22.3539
        },
        {
            "time": 55.0133,
            "type": "M_end",
            "f_text": "Well sort of embarrassed soon as I came.",
            "m_text": "Well the plan was to kind of sneak up on you over a period of a week or so.  But uh- they take it for granted that we're all set.",
            "f_start": 41.1223,
            "m_start": 44.9982,
            "f_end": 44.5,
            "m_end": 55.0133
        },
        {
            "time": 62.42,
            "type": "M_end",
            "f_text": "I figured they would- your mother at least.",
            "m_text": "How did you know?",
            "f_start": 55.0634,
            "m_start": 60.041,
            "f_end": 59.41,
            "m_end": 62.42
        },
        {
            "time": 79.4103,
            "type": "M_end",
            "f_text": "Well, from her point of view why else would I come?",
            "m_text": "Well, would you want to?  I guess you know this is why I asked you to come.",
            "f_start": 62.5848,
            "m_start": 67.1718,
            "f_end": 66.9114,
            "m_end": 79.4103
        },
        {
            "time": 94.31,
            "type": "M_end",
            "f_text": "I guess this is why I came.",
            "m_text": "Anne, I love you.  I love you a great deal.  I love you!",
            "f_start": 80.2716,
            "m_start": 85.54,
            "f_end": 84.1875,
            "m_end": 94.31
        },
        {
            "time": 135.4151,
            "type": "M_end",
            "f_text": "I almost got married two years ago.",
            "m_text": "Why didn't you?",
            "f_start": 128.9754,
            "m_start": 132.8012,
            "f_end": 132.4406,
            "m_end": 135.4151
        },
        {
            "time": 140.9135,
            "type": "M_end",
            "f_text": "You started to write me.",
            "m_text": "You felt something that far back?",
            "f_start": 135.0145,
            "m_start": 138.5399,
            "f_end": 137.17,
            "m_end": 140.9135
        },
        {
            "time": 144.3186,
            "type": "M_end",
            "f_text": "Every day since.",
            "m_text": "Annie, why didn't you say something to me?",
            "f_start": 139.942,
            "m_start": 141.8148,
            "f_end": 141.47,
            "m_end": 144.3186
        },
        {
            "time": 157.2081,
            "type": "M_end",
            "f_text": "Well I was waiting for you!  I mean I didn't-until then you hadn't written and when you write- when you wrote what did you say?  I mean you sure can be ambiguous Chris.",
            "m_text": "Give me a kiss, Ann. Give me a-",
            "f_start": 143.3972,
            "m_start": 153.7129,
            "f_end": 153.5827,
            "m_end": 157.2081
        },
        {
            "time": 191.5201,
            "type": "M_end",
            "f_text": "Not like that, you're not.",
            "m_text": "I kissed you.",
            "f_start": 187.2937,
            "m_start": 189.6673,
            "f_end": 189.6,
            "m_end": 191.5201
        },
        {
            "time": 203.06,
            "type": "M_end",
            "f_text": "Like Larry's brother.  Do it like you, Chris.  Chris, what's the matter?",
            "m_text": "Let's Let's drive someplace.  I- I want to be alone with you.",
            "f_start": 191.1696,
            "m_start": 199.9128,
            "f_end": 199.0315,
            "m_end": 203.06
        },
        {
            "time": 222.6172,
            "type": "M_end",
            "f_text": "What is it?  Even in your letters, there is something ashamed.",
            "m_text": "Yeah, I suppose I have been.  But it's going from me.",
            "f_start": 208.8263,
            "m_start": 215.9071,
            "f_end": 215.3462,
            "m_end": 222.6172
        },
        {
            "time": 236.2579,
            "type": "M_end",
            "f_text": "It wouldn't work like this.",
            "m_text": "It's- It's mixed up with so many other things, I-",
            "f_start": 228.5963,
            "m_start": 232.5647,
            "f_end": 231.1802,
            "m_end": 236.2579
        },
        {
            "time": 410.7823,
            "type": "M_end",
            "f_text": "Do you still feel like that?",
            "m_text": "I I want you now, Annie.",
            "f_start": 404.1923,
            "m_start": 407.96,
            "f_end": 406.66,
            "m_end": 410.7823
        }
    ],
    "Ses05F_script02_1.mp4": [
        {
            "time": 315.22,
            "type": "M_end",
            "f_text": "That's the wind.",
            "m_text": "Well, So what do you think?",
            "f_start": 308.61,
            "m_start": 310.9,
            "f_end": 310.7189,
            "m_end": 315.22
        }
    ],
    "Ses05F_script02_2.mp4": [
        {
            "time": 118.8934,
            "type": "M_end",
            "f_text": "I did, I do want to see it.  I always want to see it, Augie.",
            "m_text": "It's just fish, it's nothing to get traumatize over.",
            "f_start": 107.7994,
            "m_start": 114.7833,
            "f_end": 113.8142,
            "m_end": 118.8934
        },
        {
            "time": 336.5306,
            "type": "M_end",
            "f_text": "I mean it is just this , I mean it includes a lot and everything and you know it's the sand and it's the full moon and I just-I am sorry but I couldn't help wishing I was somewhere else.",
            "m_text": "Maybe if you are with somebody else too?",
            "f_start": 312.8054,
            "m_start": 332.5875,
            "f_end": 332.1197,
            "m_end": 336.5306
        },
        {
            "time": 407.2719,
            "type": "M_end",
            "f_text": "Yes, I did notice that.  It does look really beautiful on the water.  The gold white moon.",
            "m_text": "Well, look what we have got here.",
            "f_start": 394.0058,
            "m_start": 404.2645,
            "f_end": 403.8969,
            "m_end": 407.2719
        },
        {
            "time": 417.47,
            "type": "M_end",
            "f_text": "Well than we don't need glasses.",
            "m_text": "Are you still cold?  You still want to go home?",
            "f_start": 410.5132,
            "m_start": 413.0528,
            "f_end": 412.986,
            "m_end": 417.47
        },
        {
            "time": 433.3362,
            "type": "M_end",
            "f_text": "No, I am beginning to think that maybe this is the spot after all.",
            "m_text": "Shh, If we're very quiet, the fish might come.",
            "f_start": 418.36,
            "m_start": 428.1568,
            "f_end": 424.2471,
            "m_end": 433.3362
        }
    ],
    "Ses01M_script01_1.mp4": [
        {
            "time": 42.1267,
            "type": "F_end",
            "m_text": "I don't know.  But he went back in the kitchen and he cried.",
            "f_text": "Did you talk to him?",
            "m_start": 32.97,
            "f_start": 39.7634,
            "m_end": 39.31,
            "f_end": 42.1267
        },
        {
            "time": 50.417,
            "type": "F_end",
            "m_text": "No.  I figured I'd just let it wait.",
            "f_text": "Cried hard?",
            "m_start": 41.61,
            "f_start": 47.3034,
            "m_end": 46.58,
            "f_end": 50.417
        },
        {
            "time": 183.78,
            "type": "F_end",
            "m_text": "I'm going to ask her to marry me.",
            "f_text": "Well, that's only your business, Chris.",
            "m_start": 175.61,
            "f_start": 179.61,
            "m_end": 179.29,
            "f_end": 183.78
        },
        {
            "time": 251.1095,
            "type": "F_end",
            "m_text": "To hell with that.",
            "f_text": "Did you ask Annie yet?",
            "m_start": 243.55,
            "f_start": 247.1332,
            "m_end": 245.9,
            "f_end": 251.1095
        },
        {
            "time": 274.23,
            "type": "F_end",
            "m_text": "Well, if she does then that's the end of it.  However from her letters I think she's pretty much forgotten him.",
            "f_text": "The trouble is you don't see enough women, you never did.",
            "m_start": 258.29,
            "f_start": 268.7405,
            "m_end": 267.62,
            "f_end": 274.23
        },
        {
            "time": 281.21,
            "type": "F_end",
            "m_text": "So what?  I'm just--I'm not fast with women.",
            "f_text": "I don't see why it has to be Annie.",
            "m_start": 273.39,
            "f_start": 278.1,
            "m_end": 277.85,
            "f_end": 281.21
        },
        {
            "time": 308.35,
            "type": "F_end",
            "m_text": "I don't know, it I think of her, I grew up next to her.  She is what I think of when I think of a wife.",
            "f_text": "He thinks he's coming back, Chris.  You marry that girl you're pronouncing him dead.",
            "m_start": 288.42,
            "f_start": 299.18,
            "m_end": 295.59,
            "f_end": 308.35
        },
        {
            "time": 389.97,
            "type": "F_end",
            "m_text": "If that can't happen here...",
            "f_text": "You mean to tell me you would leave the business for this.",
            "m_start": 380.6425,
            "f_start": 384.2043,
            "m_end": 383.3415,
            "f_end": 389.97
        },
        {
            "time": 408.98,
            "type": "F_end",
            "m_text": "Then help me stay here mom.",
            "f_text": "All right but you don't think like that because what the hell is this all for.  This is all for you, what are we working for Chris? The whole shooting match is for you.",
            "m_start": 394.4,
            "f_start": 397.1175,
            "m_end": 397.08,
            "f_end": 408.98
        },
        {
            "time": 418.941,
            "type": "F_end",
            "m_text": "I am thinking like that.",
            "f_text": "I don't understand you, do I?",
            "m_start": 412.13,
            "f_start": 415.08,
            "m_end": 414.78,
            "f_end": 418.941
        }
    ],
    "Ses01M_script01_2.mp4": [
        {
            "time": 35.3425,
            "type": "F_end",
            "m_text": "Don't look at me like that.  He didn't tell me anything he told you.",
            "f_text": "He's not going to marry her.",
            "m_start": 26.55,
            "f_start": 32.63,
            "m_end": 32.19,
            "f_end": 35.3425
        },
        {
            "time": 161.86,
            "type": "F_end",
            "m_text": "Look at you. You're shaking.",
            "f_text": "I can't help it.",
            "m_start": 152.66,
            "f_start": 159.3,
            "m_end": 157.89,
            "f_end": 161.86
        }
    ],
    "Ses01M_script01_3.mp4": [
        {
            "time": 109.63,
            "type": "F_end",
            "m_text": "So then would you want to?  I mean I guess, you kind of have to know, maybe that's why I asked you to come.",
            "f_text": "Well I guess that's why I came.",
            "m_start": 88.72,
            "f_start": 104.15,
            "m_end": 102.15,
            "f_end": 109.63
        },
        {
            "time": 154.14,
            "type": "F_end",
            "m_text": "I'm sorry I'm embarrassing you, aren't I?  See, I didn't want to do it here I didn't on this porch, with this ring--I didn't want to win you away from anything.",
            "f_text": "I've been ready a long, long time.",
            "m_start": 132.78,
            "f_start": 150.83,
            "m_end": 147.95,
            "f_end": 154.14
        },
        {
            "time": 165.3,
            "type": "F_end",
            "m_text": "So then he's gone.  You sure?",
            "f_text": "I almost got married two years ago.",
            "m_start": 156.22,
            "f_start": 161.93,
            "m_end": 161.5,
            "f_end": 165.3
        },
        {
            "time": 256.4398,
            "type": "F_end",
            "m_text": "I don't know it's--it's complicated. But it's going from me now.",
            "f_text": "You got to tell me.",
            "m_start": 244.14,
            "f_start": 253.41,
            "m_end": 252.92,
            "f_end": 256.4398
        },
        {
            "time": 269.08,
            "type": "F_end",
            "m_text": "It's kind of all mixed up with all these other things.",
            "f_text": "Wouldn't work like this.",
            "m_start": 259.351,
            "f_start": 265.5717,
            "m_end": 263.97,
            "f_end": 269.08
        },
        {
            "time": 288.34,
            "type": "F_end",
            "m_text": "Well I lost them.",
            "f_text": "How many?",
            "m_start": 281.14,
            "f_start": 285.51,
            "m_end": 283.91,
            "f_end": 288.34
        },
        {
            "time": 472.87,
            "type": "F_end",
            "m_text": "I want you to know Annie.",
            "f_text": "'Cause you mustn't feel that way.  Everything you have, you have a right to...",
            "m_start": 460.4,
            "f_start": 464.0599,
            "m_end": 463.85,
            "f_end": 472.87
        }
    ],
    "Ses01M_script02_1.mp4": [
        {
            "time": 130.3,
            "type": "F_end",
            "m_text": "What's wrong?  Are you okay?  Huh?  You cold?",
            "f_text": "I'm fine.",
            "m_start": 125.1356,
            "f_start": 128.555,
            "m_end": 128.46,
            "f_end": 130.3
        },
        {
            "time": 405.04,
            "type": "F_end",
            "m_text": "It's crazy.  Look at this, I'm giving myself goose bumps, the hairs are standing up on my arm.",
            "f_text": "That's the wind.",
            "m_start": 393.63,
            "f_start": 402.01,
            "m_end": 401.8275,
            "f_end": 405.04
        }
    ],
    "Ses01M_script02_2.mp4": [
        {
            "time": 145.1545,
            "type": "F_end",
            "m_text": "Okay, I'm trying to work this backwards",
            "f_text": "You don't understand anything I'm saying.",
            "m_start": 137.4365,
            "f_start": 141.9575,
            "m_end": 140.3043,
            "f_end": 145.1545
        },
        {
            "time": 394.05,
            "type": "F_end",
            "m_text": "I know me neither.",
            "f_text": "This is just this.  I mean it includes a lot and everything but it's--do you understand what I'm saying?",
            "m_start": 378.503,
            "f_start": 382.45,
            "m_end": 381.51,
            "f_end": 394.05
        },
        {
            "time": 435.48,
            "type": "F_end",
            "m_text": "No, I know but--I know I don't make you happy.",
            "f_text": "Are you kidding me?  For heaven sake Augie anything I'm doing I'd rather be doing it with you.",
            "m_start": 419.26,
            "f_start": 427.3434,
            "m_end": 425.97,
            "f_end": 435.48
        },
        {
            "time": 472.4052,
            "type": "F_end",
            "m_text": "Actually, you know what?  Now you mentioned that--no I don't.",
            "f_text": "So maybe we're in the wrong spot.  But we're with the right person.",
            "m_start": 454.7986,
            "f_start": 465.88,
            "m_end": 463.23,
            "f_end": 472.4052
        }
    ],
    "Ses01M_script03_1.mp4": [
        {
            "time": 49.63,
            "type": "F_end",
            "m_text": "No, it's a wrong number.",
            "f_text": "Oh, oh, that sent shivers on my spine.",
            "m_start": 40.6661,
            "f_start": 44.28,
            "m_end": 42.96,
            "f_end": 49.63
        },
        {
            "time": 137.04,
            "type": "F_end",
            "m_text": "Well it depends on how well we've played.",
            "f_text": "If one of us dies...",
            "m_start": 129.77,
            "f_start": 133.95,
            "m_end": 133.26,
            "f_end": 137.04
        },
        {
            "time": 185.41,
            "type": "F_end",
            "m_text": "Come here darling, kiss me",
            "f_text": "Oh, Elliot.  Worms don't pop.",
            "m_start": 174.5256,
            "f_start": 180.62,
            "m_end": 177.9,
            "f_end": 185.41
        },
        {
            "time": 215.0,
            "type": "F_end",
            "m_text": "You could run off with all the men in a world. I won't say a word.  Just as long as you love me best.",
            "f_text": "The same applies to you too, except you so much as look at another women I'll kill you.",
            "m_start": 198.25,
            "f_start": 208.17,
            "m_end": 206.15,
            "f_end": 215.0
        },
        {
            "time": 267.82,
            "type": "F_end",
            "m_text": "Oh that was a rouser wasn't it?",
            "f_text": "The manager came in he found us rolling about the floor.  [LAUGHTER]",
            "m_start": 259.67,
            "f_start": 263.07,
            "m_end": 262.15,
            "f_end": 267.82
        }
    ],
    "Ses01M_script03_2.mp4": [
        {
            "time": 77.98,
            "type": "F_end",
            "m_text": "That's a nice point of view I must say.",
            "f_text": "I'm bored with this conversation.",
            "m_start": 70.2675,
            "f_start": 73.7041,
            "m_end": 73.5745,
            "f_end": 77.98
        },
        {
            "time": 118.07,
            "type": "F_end",
            "m_text": "You can hardly call three glasses of liquor in a whole evening going on and on and on.",
            "f_text": "I just, I just think it's becoming a habit with you.",
            "m_start": 103.3845,
            "f_start": 111.97,
            "m_end": 111.61,
            "f_end": 118.07
        },
        {
            "time": 275.34,
            "type": "F_end",
            "m_text": "This is no time a year for Tunis.",
            "f_text": "Turn it on again, please.",
            "m_start": 268.76,
            "f_start": 272.51,
            "m_end": 271.9275,
            "f_end": 275.34
        }
    ],
    "Ses02M_script01_1.mp4": [
        {
            "time": 28.33,
            "type": "F_end",
            "m_text": "About four this morning. I heard it cracking and I woke up and looked out. He was standing right here when it cracked.",
            "f_text": "What was he doing out here at four in the morning?",
            "m_start": 16.54,
            "f_start": 25.28,
            "m_end": 24.3,
            "f_end": 28.33
        },
        {
            "time": 59.87,
            "type": "F_end",
            "m_text": "I guess he is.",
            "f_text": "He's getting just like after he died. What is the meaning of that?",
            "m_start": 52.41,
            "f_start": 54.41,
            "m_end": 54.26,
            "f_end": 59.87
        },
        {
            "time": 146.25,
            "type": "F_end",
            "m_text": "I'm going to ask her to marry me.",
            "f_text": "Well that's only your business, Chris.",
            "m_start": 140.67,
            "f_start": 143.5,
            "m_end": 143.1,
            "f_end": 146.25
        },
        {
            "time": 204.19,
            "type": "F_end",
            "m_text": "To hell with that.",
            "f_text": "Have you asked Annie yet?",
            "m_start": 199.88,
            "f_start": 201.67,
            "m_end": 201.62,
            "f_end": 204.19
        },
        {
            "time": 227.13,
            "type": "F_end",
            "m_text": "I don't know, I'll find out. Then we'll trash it out with dad, right? Mom, don't avoid me.",
            "f_text": "Trouble is you don't see enough women, you never did.",
            "m_start": 215.81,
            "f_start": 223.32,
            "m_end": 223.11,
            "f_end": 227.13
        },
        {
            "time": 242.82,
            "type": "F_end",
            "m_text": "Because it is.",
            "f_text": "That's a good answer but it doesn't answer anything. I mean you haven't seen her since you went away to war it's five years.",
            "m_start": 233.46,
            "f_start": 235.99,
            "m_end": 235.76,
            "f_end": 242.82
        },
        {
            "time": 269.27,
            "type": "F_end",
            "m_text": "All right. All right. Mom.",
            "f_text": "Just give it some more thought.",
            "m_start": 264.45,
            "f_start": 266.79,
            "m_end": 266.43,
            "f_end": 269.27
        },
        {
            "time": 323.57,
            "type": "F_end",
            "m_text": "I want a family; I want kids; I want something I can give myself to. Annie is in the middle of that. Now where do I find it?",
            "f_text": "Tell me, you'd leave the business?",
            "m_start": 310.27,
            "f_start": 320.71,
            "m_end": 320.7,
            "f_end": 323.57
        },
        {
            "time": 329.41,
            "type": "F_end",
            "m_text": "Yes, on this I would.",
            "f_text": "Well, you don't want to think like that.",
            "m_start": 323.69,
            "f_start": 326.65,
            "m_end": 326.52,
            "f_end": 329.41
        },
        {
            "time": 344.78,
            "type": "F_end",
            "m_text": "I know I know mom. All right. Just help me stay here.",
            "f_text": "Just don't go thinking that way.",
            "m_start": 337.62,
            "f_start": 342.31,
            "m_end": 342.14,
            "f_end": 344.78
        },
        {
            "time": 350.81,
            "type": "F_end",
            "m_text": "Well, I am thinking that way.",
            "f_text": "I don't understand you, do I?",
            "m_start": 344.49,
            "f_start": 347.92,
            "m_end": 346.97,
            "f_end": 350.81
        }
    ],
    "Ses02M_script02_1.mp4": [
        {
            "time": 312.91,
            "type": "F_end",
            "m_text": "Well, so what do you think?",
            "f_text": "About what?",
            "m_start": 309.96,
            "f_start": 311.58,
            "m_end": 311.51,
            "f_end": 312.91
        },
        {
            "time": 316.83,
            "type": "F_end",
            "m_text": "What I was saying.",
            "f_text": "It's ridiculous.",
            "m_start": 312.96,
            "f_start": 314.67,
            "m_end": 314.57,
            "f_end": 316.83
        }
    ],
    "Ses02M_script02_2.mp4": [
        {
            "time": 103.27,
            "type": "F_end",
            "m_text": "I thought you wanted to see them.",
            "f_text": "You don't understand anything I'm saying.",
            "m_start": 98.12,
            "f_start": 100.14,
            "m_end": 100.09,
            "f_end": 103.27
        },
        {
            "time": 375.59,
            "type": "F_end",
            "m_text": "I don't know it seemed like a pretty good spot to me. Look at the moon - view the moon view I got from here.",
            "f_text": "Yes, I noticed that. It looks pretty on the water doesn't it? Big old white moon.",
            "m_start": 362.2472,
            "f_start": 368.65,
            "m_end": 368.35,
            "f_end": 375.59
        },
        {
            "time": 400.12,
            "type": "F_end",
            "m_text": "You still cold? Do you want my jacket? Do you want to go home?",
            "f_text": "No. No. I think you might be right. I think this may be the spot after all.",
            "m_start": 387.74,
            "f_start": 391.92,
            "m_end": 391.54,
            "f_end": 400.12
        }
    ],
    "Ses02M_script03_2.mp4": [
        {
            "time": 102.8988,
            "type": "F_end",
            "m_text": "That reply has broken my heart.",
            "f_text": "watch me a minute, will you?",
            "m_start": 94.8847,
            "f_start": 100.5652,
            "m_end": 98.2496,
            "f_end": 102.8988
        }
    ],
    "Ses03M_script01_1.mp4": [
        {
            "time": 49.4985,
            "type": "F_end",
            "m_text": "No.  I figured the best thing to do was leave him alone.",
            "f_text": "He cried hard?",
            "m_start": 41.7292,
            "f_start": 47.5298,
            "m_end": 47.2837,
            "f_end": 49.4985
        },
        {
            "time": 54.8596,
            "type": "F_end",
            "m_text": "I could hear it right through the floor.",
            "f_text": "God, what was he doing out there anyway?",
            "m_start": 49.0414,
            "f_start": 51.5374,
            "m_end": 51.432,
            "f_end": 54.8596
        },
        {
            "time": 282.9111,
            "type": "F_end",
            "m_text": "Because it is.",
            "f_text": "Well that's a good answer but, it doesn't answer anything.  You haven't seen her since you left to go to the war and it's been five years.",
            "m_start": 270.3431,
            "f_start": 273.8586,
            "m_end": 273.2258,
            "f_end": 282.9111
        },
        {
            "time": 336.3425,
            "type": "F_end",
            "m_text": "But if I can't have that here I'll get out.",
            "f_text": "What the hell is this?",
            "m_start": 329.9225,
            "f_start": 333.5675,
            "m_end": 333.3939,
            "f_end": 336.3425
        },
        {
            "time": 381.0642,
            "type": "F_end",
            "m_text": "Now Annie is in the middle of all that.  Where do I find it?",
            "f_text": "Tell me something.  You can leave this business?",
            "m_start": 372.0118,
            "f_start": 376.51,
            "m_end": 376.0898,
            "f_end": 381.0642
        },
        {
            "time": 394.1947,
            "type": "F_end",
            "m_text": "Then help me stay here.",
            "f_text": "Alright but you can't talk like that you hear?",
            "m_start": 386.7945,
            "f_start": 390.2222,
            "m_end": 389.8003,
            "f_end": 394.1947
        },
        {
            "time": 414.7429,
            "type": "F_end",
            "m_text": "I am thinking like that.",
            "f_text": "I don't understand you do I?",
            "m_start": 407.0791,
            "f_start": 411.4559,
            "m_end": 410.5946,
            "f_end": 414.7429
        },
        {
            "time": 422.6352,
            "type": "F_end",
            "m_text": "No you don't.  I'm a pretty tough guy.",
            "f_text": "Yeah.  I can see that.",
            "m_start": 414.2156,
            "f_start": 419.067,
            "m_end": 418.5924,
            "f_end": 422.6352
        }
    ],
    "Ses03M_script01_2.mp4": [
        {
            "time": 45.705,
            "type": "F_end",
            "m_text": "Well, so what?",
            "f_text": "What's going on here Joe?",
            "m_start": 40.3741,
            "f_start": 43.3633,
            "m_end": 42.205,
            "f_end": 45.705
        },
        {
            "time": 140.7125,
            "type": "F_end",
            "m_text": "Okay. Calm yourself. Just calm yourself.",
            "f_text": "I can't do it all alone.",
            "m_start": 131.1125,
            "f_start": 137.9875,
            "m_end": 136.2145,
            "f_end": 140.7125
        },
        {
            "time": 161.2573,
            "type": "F_end",
            "m_text": "Alright, alright, calm yourself okay?  Calm yourself. Wait, wait.  What do you mean, me above all?",
            "f_text": "Look, just keep believing okay?",
            "m_start": 149.5275,
            "f_start": 158.1087,
            "m_end": 157.9626,
            "f_end": 161.2573
        }
    ],
    "Ses03M_script01_3.mp4": [
        {
            "time": 143.56,
            "type": "F_end",
            "m_text": "Why didn't you?",
            "f_text": "You started to write me.",
            "m_start": 138.0643,
            "f_start": 140.6812,
            "m_end": 140.485,
            "f_end": 143.56
        },
        {
            "time": 158.5199,
            "type": "F_end",
            "m_text": "Why didn't you let me know?",
            "f_text": "I was waiting for you Chris, I mean, till then you never wrote and then when you did what did you say?",
            "m_start": 148.074,
            "f_start": 151.3888,
            "m_end": 151.2361,
            "f_end": 158.5199
        },
        {
            "time": 183.4461,
            "type": "F_end",
            "m_text": "Oh God.  Annie, I kissed Annie.  I kissed Annie.",
            "f_text": "I'll never forgive you for that.",
            "m_start": 170.19,
            "f_start": 181.1126,
            "m_end": 177.5798,
            "f_end": 183.4461
        },
        {
            "time": 190.0102,
            "type": "F_end",
            "m_text": "How long, how long I've been waiting to do that.",
            "f_text": "I mean,  Why did you wait all these years?  There I was sitting around and wondering if I was crazy for thinking about you.",
            "m_start": 177.9425,
            "f_start": 183.4897,
            "m_end": 181.6575,
            "f_end": 190.0102
        },
        {
            "time": 385.8212,
            "type": "F_end",
            "m_text": "And I didn't want to take any of it and I guess that included you.",
            "f_text": "And you still feel that way?",
            "m_start": 375.2492,
            "f_start": 382.4192,
            "m_end": 382.1793,
            "f_end": 385.8212
        },
        {
            "time": 414.978,
            "type": "F_end",
            "m_text": "Annie I'm going to make a fortune for you.",
            "f_text": "What am I going to do with a fortune?",
            "m_start": 407.0182,
            "f_start": 411.0308,
            "m_end": 410.6601,
            "f_end": 414.978
        }
    ],
    "Ses03M_script02_1.mp4": [
        {
            "time": 134.5338,
            "type": "F_end",
            "m_text": "I wonder if they can hear us talk?  Or feel the vibrations in the sand when we move around?",
            "f_text": "Look, I'm cold.",
            "m_start": 125.2328,
            "f_start": 131.5159,
            "m_end": 131.0047,
            "f_end": 134.5338
        }
    ],
    "Ses03M_script02_2.mp4": [
        {
            "time": 13.835,
            "type": "F_end",
            "m_text": "About what I just said?",
            "f_text": "It's ridiculous.",
            "m_start": 8.953,
            "f_start": 11.664,
            "m_end": 11.5957,
            "f_end": 13.835
        },
        {
            "time": 173.7529,
            "type": "F_end",
            "m_text": "And then I'm putting the animals out in the yard, I'm pulling the car out of the garage, putting my jacket on.",
            "f_text": "Look, do you remember the first time we came here?",
            "m_start": 161.6788,
            "f_start": 168.8321,
            "m_end": 168.217,
            "f_end": 173.7529
        },
        {
            "time": 216.0121,
            "type": "F_end",
            "m_text": "Wait a minute.  I've got it.",
            "f_text": "What?  Dancing barefoot in the sand?  Drinking out of a bottle of champagne?",
            "m_start": 202.4117,
            "f_start": 208.6993,
            "m_end": 207.1274,
            "f_end": 216.0121
        },
        {
            "time": 399.6521,
            "type": "F_end",
            "m_text": "Actually, now that you mention it, no I don't.",
            "f_text": "Well, I guess this is the wrong spot for the right people.",
            "m_start": 384.2064,
            "f_start": 391.1774,
            "m_end": 390.9041,
            "f_end": 399.6521
        }
    ],
    "Ses03M_script03_1.mp4": [
        {
            "time": 42.6425,
            "type": "F_end",
            "m_text": "Hello?  Hello?  What?",
            "f_text": "That sent shivers up my spine.",
            "m_start": 32.56,
            "f_start": 38.0,
            "m_end": 36.46,
            "f_end": 42.6425
        },
        {
            "time": 131.1025,
            "type": "F_end",
            "m_text": "Well, it depends on how well we've played.",
            "f_text": "What happens if one of us dies?  I mean, does the other one still laugh?",
            "m_start": 121.02,
            "f_start": 126.32,
            "m_end": 126.29,
            "f_end": 131.1025
        },
        {
            "time": 223.1175,
            "type": "F_end",
            "m_text": "Horrible little thing.",
            "f_text": "Yeah.  I know you did.  You threw it out the window and into the Grand Canal.  I don't think I'll ever forgive you for that.",
            "m_start": 214.08,
            "f_start": 216.25,
            "m_end": 215.43,
            "f_end": 223.1175
        },
        {
            "time": 238.1252,
            "type": "F_end",
            "m_text": "Oh, the worst one was in Cannes when you-",
            "f_text": "I burnt a hole in my comb too and all the towels in the bathroom.",
            "m_start": 228.0275,
            "f_start": 234.26,
            "m_end": 231.48,
            "f_end": 238.1252
        }
    ],
    "Ses04M_script02_1.mp4": [
        {
            "time": 183.72,
            "type": "F_end",
            "m_text": "Oh, it's a big night for these guys.  Uh, life's last orgy.",
            "f_text": "This isn't a moon landing we're talking about.  It's fish.  It's fish nobody even eats.",
            "m_start": 173.0554,
            "f_start": 179.05,
            "m_end": 177.2232,
            "f_end": 183.72
        }
    ],
    "Ses04M_script02_2.mp4": [
        {
            "time": 146.23,
            "type": "F_end",
            "m_text": "Uh,okay.  So I'm putting on my jacket; putting out the animals;",
            "f_text": "Do you remember the first time we came to see it?",
            "m_start": 137.2423,
            "f_start": 143.49,
            "m_end": 141.2,
            "f_end": 146.23
        }
    ],
    "Ses04M_script03_2.mp4": [
        {
            "time": 141.2266,
            "type": "F_end",
            "m_text": "Line?",
            "f_text": "It's a pity you didn't- It's a pity you didn't have more brandy.",
            "m_start": 136.4393,
            "f_start": 139.78,
            "m_end": 138.02,
            "f_end": 141.2266
        }
    ],
    "Ses05M_script01_1.mp4": [
        {
            "time": 45.3,
            "type": "F_end",
            "m_text": "No.  I figured it was best to leave him alone.",
            "f_text": "He cried hard?",
            "m_start": 39.02,
            "f_start": 43.63,
            "m_end": 43.08,
            "f_end": 45.3
        },
        {
            "time": 58.84,
            "type": "F_end",
            "m_text": "I could hear him right through the floor in my room.",
            "f_text": "What was he doing out there at that hour?  He's getting just like after Larry died, walking around at night.  He dreams.",
            "m_start": 44.98,
            "f_start": 48.95,
            "m_end": 47.96,
            "f_end": 58.84
        },
        {
            "time": 63.56,
            "type": "F_end",
            "m_text": "I guess he is.",
            "f_text": "What's the meaning of that?",
            "m_start": 58.44,
            "f_start": 60.88,
            "m_end": 60.41,
            "f_end": 63.56
        },
        {
            "time": 108.95,
            "type": "F_end",
            "m_text": "We have to say it to him.",
            "f_text": "how are you gonna prove it?  Can you prove it?",
            "m_start": 103.52,
            "f_start": 106.32,
            "m_end": 106.05,
            "f_end": 108.95
        },
        {
            "time": 153.19,
            "type": "F_end",
            "m_text": "I'm going to ask her to marry me.",
            "f_text": "Well, that's your business, Chris.",
            "m_start": 146.89,
            "f_start": 150.8,
            "m_end": 149.75,
            "f_end": 153.19
        },
        {
            "time": 244.02,
            "type": "F_end",
            "m_text": "Well, if that's the case, then that's the end of it.  But from her letters it sounds like she has forgotten him.  I'll find out.  And then we'll thrash it out with dad, all right?  Mom, don't avoid me.",
            "f_text": "Well, the trouble is you never saw enough women.",
            "m_start": 225.47,
            "f_start": 240.48,
            "m_end": 240.27,
            "f_end": 244.02
        },
        {
            "time": 289.72,
            "type": "F_end",
            "m_text": "All right then, mom.",
            "f_text": "Just give it some more thought.",
            "m_start": 284.74,
            "f_start": 287.4,
            "m_end": 287.27,
            "f_end": 289.72
        },
        {
            "time": 327.23,
            "type": "F_end",
            "m_text": "Yes.  On this, I would.",
            "f_text": "You can't think like that.",
            "m_start": 322.75,
            "f_start": 325.06,
            "m_end": 325.03,
            "f_end": 327.23
        },
        {
            "time": 348.79,
            "type": "F_end",
            "m_text": "I am thinking that way.",
            "f_text": "I don't understand you, do I?",
            "m_start": 341.48,
            "f_start": 346.27,
            "m_end": 344.05,
            "f_end": 348.79
        }
    ],
    "Ses05M_script01_1b.mp4": [
        {
            "time": 28.87,
            "type": "F_end",
            "m_text": "About four this morning.  I heard it crack and I looked out the window and he was standing right there when it cracked.",
            "f_text": "What was he doing out here four in the morning?",
            "m_start": 16.83,
            "f_start": 25.34,
            "m_end": 24.83,
            "f_end": 28.87
        },
        {
            "time": 55.02,
            "type": "F_end",
            "m_text": "No.  I figured it was best to leave him alone.",
            "f_text": "He's dreaming about him again.  He's getting just like after Larry died. What's the meaning of that?",
            "m_start": 38.23,
            "f_start": 45.25,
            "m_end": 44.06,
            "f_end": 55.02
        },
        {
            "time": 155.11,
            "type": "F_end",
            "m_text": "I'm gonna ask her to marry me.",
            "f_text": "Well, that's your business, Chris.",
            "m_start": 149.25,
            "f_start": 153.03,
            "m_end": 152.28,
            "f_end": 155.11
        },
        {
            "time": 245.17,
            "type": "F_end",
            "m_text": "So what, I'm not fast with women?",
            "f_text": "I just don't see why it has to be Annie.",
            "m_start": 238.52,
            "f_start": 242.28,
            "m_end": 241.85,
            "f_end": 245.17
        },
        {
            "time": 373.01,
            "type": "F_end",
            "m_text": "Well, I am thinking like that.",
            "f_text": "I don't understand you, do I?",
            "m_start": 367.03,
            "f_start": 370.87,
            "m_end": 369.6377,
            "f_end": 373.01
        }
    ],
    "Ses05M_script01_2.mp4": [
        {
            "time": 33.73,
            "type": "F_end",
            "m_text": "What are you talking about?  He grew up next to the girl his whole life, why wouldn't he want to see her again?  Don't look at me like that.  He hasn't told me anything he didn't told you.",
            "f_text": "He's not going to marry her.",
            "m_start": 21.05,
            "f_start": 31.32,
            "m_end": 31.06,
            "f_end": 33.73
        },
        {
            "time": 52.23,
            "type": "F_end",
            "m_text": "Now listen.",
            "f_text": "No.  She's not his girl, Joe.  She knows she's not.",
            "m_start": 44.31,
            "f_start": 48.28,
            "m_end": 47.68,
            "f_end": 52.23
        },
        {
            "time": 75.73,
            "type": "F_end",
            "m_text": "How do you know why she's waited?",
            "f_text": "Because she knows what I know, that's why.  She's faithful as a rock.  In my worst moments I think of her waiting and I know again that I'm right.",
            "m_start": 62.77,
            "f_start": 66.34,
            "m_end": 66.17,
            "f_end": 75.73
        },
        {
            "time": 117.53,
            "type": "F_end",
            "m_text": "Calm yourself.",
            "f_text": "Believe with me, Joe.  I can't stand alone.",
            "m_start": 111.82,
            "f_start": 114.06,
            "m_end": 113.93,
            "f_end": 117.53
        },
        {
            "time": 133.18,
            "type": "F_end",
            "m_text": "What do you mean, me above all?",
            "f_text": "Just don't stop believing.",
            "m_start": 126.89,
            "f_start": 130.53,
            "m_end": 130.42,
            "f_end": 133.18
        }
    ],
    "Ses05M_script01_3.mp4": [
        {
            "time": 57.13,
            "type": "F_end",
            "m_text": "Well, I planned on kind of sneaking up on you in a period of a week or so, but they all take it for granted that we're set.",
            "f_text": "I figured they would, your mother at least.",
            "m_start": 43.97,
            "f_start": 53.58,
            "m_end": 53.46,
            "f_end": 57.13
        },
        {
            "time": 82.18,
            "type": "F_end",
            "m_text": "Well, so would you want to?  I mean, I guess you know that's why I asked you to come.",
            "f_text": "Yes, that's why I came.",
            "m_start": 66.98,
            "f_start": 79.74,
            "m_end": 78.59,
            "f_end": 82.18
        },
        {
            "time": 134.53,
            "type": "F_end",
            "m_text": "So he's gone forever then?  You sure?",
            "f_text": "I almost got married two years ago.",
            "m_start": 127.01,
            "f_start": 131.86,
            "m_end": 131.61,
            "f_end": 134.53
        },
        {
            "time": 139.56,
            "type": "F_end",
            "m_text": "Why didn't you?",
            "f_text": "You started to write me.",
            "m_start": 135.08,
            "f_start": 137.31,
            "m_end": 137.07,
            "f_end": 139.56
        },
        {
            "time": 198.97,
            "type": "F_end",
            "m_text": "No, nothing like that.",
            "f_text": "You have to tell me.",
            "m_start": 192.9,
            "f_start": 196.98,
            "m_end": 195.77,
            "f_end": 198.97
        },
        {
            "time": 213.37,
            "type": "F_end",
            "m_text": "Yeah, I suppose I have been.  But it's going for me.",
            "f_text": "You have to tell me.",
            "m_start": 205.17,
            "f_start": 211.16,
            "m_end": 210.69,
            "f_end": 213.37
        },
        {
            "time": 219.0581,
            "type": "F_end",
            "m_text": "I don't I don't know where to start.",
            "f_text": "It wouldn't work like this.",
            "m_start": 214.2,
            "f_start": 216.96,
            "m_end": 216.64,
            "f_end": 219.0581
        },
        {
            "time": 409.18,
            "type": "F_end",
            "m_text": "And I guess that included you.",
            "f_text": "Do you still feel like that?",
            "m_start": 403.0,
            "f_start": 406.5,
            "m_end": 405.28,
            "f_end": 409.18
        },
        {
            "time": 424.4,
            "type": "F_end",
            "m_text": "I want you now, Annie.",
            "f_text": "Because you can't feel like that anymore, Chris.  Because everything you have, you have a right to, me included.",
            "m_start": 410.99,
            "f_start": 413.84,
            "m_end": 413.43,
            "f_end": 424.4
        }
    ],
    "Ses05M_script02_2.mp4": [
        {
            "time": 118.09,
            "type": "F_end",
            "m_text": "No, of course not.",
            "f_text": "I did want to see it.  I always want to see it.  I just- I keep thinking this will be the time and it never is.",
            "m_start": 106.52,
            "f_start": 110.14,
            "m_end": 109.0,
            "f_end": 118.09
        },
        {
            "time": 207.03,
            "type": "F_end",
            "m_text": "Wait a minute.  I've got it.",
            "f_text": "Dancing barefoot in the sand, drinking champagne out of the bottle.",
            "m_start": 194.64,
            "f_start": 201.29,
            "m_end": 198.95,
            "f_end": 207.03
        },
        {
            "time": 332.19,
            "type": "F_end",
            "m_text": "Now, I know.  Me either",
            "f_text": "This is just this.  I mean, it's a lot and everything.  But it's not, you know, something else.  Am I making any sense?",
            "m_start": 318.34,
            "f_start": 322.11,
            "m_end": 321.99,
            "f_end": 332.19
        },
        {
            "time": 394.59,
            "type": "F_end",
            "m_text": "Actually, now that you mention it, no.  I don't.",
            "f_text": "Okay.  Well, we're in the wrong spot but we're with the right person.",
            "m_start": 381.7787,
            "f_start": 390.54,
            "m_end": 389.38,
            "f_end": 394.59
        },
        {
            "time": 411.26,
            "type": "F_end",
            "m_text": "I don't know.  I think this is a pretty good spot.  I mean, look at the view of the moon from here.",
            "f_text": "Yes, I did notice that.  It does look really beautiful over the water.  Big old white moon.",
            "m_start": 394.76,
            "f_start": 402.0482,
            "m_end": 400.7742,
            "f_end": 411.26
        },
        {
            "time": 418.43,
            "type": "F_end",
            "m_text": "Oh, well look what we've got here.",
            "f_text": "Augie, you brought refreshments.",
            "m_start": 412.35,
            "f_start": 416.1773,
            "m_end": 416.02,
            "f_end": 418.43
        },
        {
            "time": 441.78,
            "type": "F_end",
            "m_text": "Are you still cold?  Still want to go home?",
            "f_text": "No.  I'm beginning to think you might be right. I think  this might be the spot after all.  Augie, I'm sorry.",
            "m_start": 423.17,
            "f_start": 428.3,
            "m_end": 427.84,
            "f_end": 441.78
        }
    ],
    "Ses05M_script03_1.mp4": [
        {
            "time": 112.96,
            "type": "F_end",
            "m_text": "[garbage] who knows?",
            "f_text": "Well, will we always bicker and fight?",
            "m_start": 106.04,
            "f_start": 109.26,
            "m_end": 108.52,
            "f_end": 112.96
        },
        {
            "time": 124.42,
            "type": "F_end",
            "m_text": "Well, it depends on how well we played.",
            "f_text": "What if one of us dies, does the other one laugh then?",
            "m_start": 117.35,
            "f_start": 120.38,
            "m_end": 119.61,
            "f_end": 124.42
        },
        {
            "time": 230.55,
            "type": "F_end",
            "m_text": "Oh, I didn't hit you very hard.",
            "f_text": "And then the manager came in and saw us all rolling all over the floor, biting and scratching one another. [LAUGHTER]",
            "m_start": 221.13,
            "f_start": 223.87,
            "m_end": 223.83,
            "f_end": 230.55
        }
    ],
    "Ses05M_script03_2.mp4": [
        {
            "time": 227.95,
            "type": "F_end",
            "m_text": "Very amusing indeed.",
            "f_text": "You know what, I'm sick and tire of listening to you.  You're a-- You're a total sadistic bully.",
            "m_start": 218.83,
            "f_start": 222.63,
            "m_end": 221.37,
            "f_end": 227.95
        }
    ]
};

// 导出数据以供annotation系统使用
if (typeof window !== 'undefined') {
    window.DIALOG_DATA = DIALOG_DATA;
}
