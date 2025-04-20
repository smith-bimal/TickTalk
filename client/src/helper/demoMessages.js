export const demoMessages = [
    {
        sender: "You",
        time: "6:26 am",
        avatar: "https://storage.googleapis.com/a1aa/image/efb9ffcf-fcb2-40a6-99ae-5a5a73c4450f.jpg",
        text: "Cool, Btw ,hey check out these projected stats for our latest trucks",
        images: [
            {
                url: "https://storage.googleapis.com/a1aa/image/b26e9afd-36a7-4995-cadc-655bcca18cf5.jpg",
                label: "Dashboard.jpg",
                price: "$6,25.50"
            },
            {
                url: "https://storage.googleapis.com/a1aa/image/99afb6a1-15da-42dc-15ff-925f80803a2d.jpg",
                label: "Truck.jpg"
            }
        ],
        edited: false
    },
    {
        divider: "YESTERDAY"
    },
    {
        sender: "Jack Nicholson",
        time: "6:28 am",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        text: "I am getting error while running this line. Any thoughts?",
        code: [
            " .style {",
            "   left: .right;",
            "   float: left;",
            "   width: 20%; /* The width is 20%, by default */",
            " }"
        ]
    },
    {
        sender: "You",
        time: "6:28 am",
        avatar: "https://storage.googleapis.com/a1aa/image/efb9ffcf-fcb2-40a6-99ae-5a5a73c4450f.jpg",
        text: "Hey Jack, I think the issue here might be a missed semicolon after defining the width. ;)",
        edited: true
    },
    {
        divider: "TODAY"
    },
    {
        sender: "Karen Page",
        time: "6:26 am",
        avatar: "https://storage.googleapis.com/a1aa/image/54e90027-6381-4045-cbd5-7b7a8b980107.jpg",
        text: `Hey Matt, We have to speed up this project as the client seems a little upset with the overall progress. Also, I think we need to create this week's schedule to make sure everyone is onboard. @Foggy, can you get that ASAP!`,
        edited: true
    },
    {
        sender: "Foggy Nelson",
        time: "6:27 am",
        avatar: "https://storage.googleapis.com/a1aa/image/59b2c73e-700b-49ae-0cce-4ea408c1d035.jpg",
        text: "Guys, I've made a schedule, please check it out and share your views!",
        file: {
            name: "WorkSchedule.pdf",
            size: "246.3 KB"
        }
    },
    ...Array.from({ length: 90 }, (_, i) => {
        const users = [
            {
                sender: "You",
                avatar: "https://storage.googleapis.com/a1aa/image/efb9ffcf-fcb2-40a6-99ae-5a5a73c4450f.jpg"
            },
            {
                sender: "Karen Page",
                avatar: "https://storage.googleapis.com/a1aa/image/54e90027-6381-4045-cbd5-7b7a8b980107.jpg"
            },
            {
                sender: "Foggy Nelson",
                avatar: "https://storage.googleapis.com/a1aa/image/59b2c73e-700b-49ae-0cce-4ea408c1d035.jpg"
            },
            {
                sender: "Jack Nicholson",
                avatar: "https://randomuser.me/api/portraits/men/32.jpg"
            }
        ];
        const user = users[i % users.length];
        const baseTime = 8 + Math.floor(i / 6);
        const min = (10 + i) % 60;
        const ampm = baseTime < 12 ? "am" : "pm";
        const time = `${baseTime % 12 === 0 ? 12 : baseTime % 12}:${min < 10 ? "0" : ""}${min} ${ampm}`;
        let msg = {
            sender: user.sender,
            time,
            avatar: user.avatar,
            text: `Demo message #${i + 8} for scroll testing.`
        };
        if (i % 15 === 0) {
            msg.text = `@${user.sender} shared a file.`;
            msg.file = {
                name: `Document${i + 1}.pdf`,
                size: `${100 + i} KB`
            };
        }
        if (i % 17 === 0) {
            msg.text = `Here is a code snippet for you:`;
            msg.code = [
                `function demo${i}() {`,
                `  return "Hello, World!";`,
                `}`
            ];
        }
        if (i % 13 === 0) {
            msg.text = `Check out this image!`;
            msg.images = [
                {
                    url: "https://storage.googleapis.com/a1aa/image/99afb6a1-15da-42dc-15ff-925f80803a2d.jpg",
                    label: `Image${i + 1}.jpg`
                }
            ];
        }
        if (i % 10 === 0) {
            msg.edited = true;
        }
        return msg;
    })
];