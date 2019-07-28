const {Tour} = require("./models/tour");
const mongoose = require("mongoose");
const config = require("config");

const data = [
    {
        title: "Right Tours-أيه أم سي رويال-إقامة شاملة جميع الوجبات والمشروبات",
        rating: "5",
        agency: {name: 'Agency Name', email: 'agency_01@gmail.com', plan:'premium'},
        days: "5",
        mealPlan: "فطار وعشاء",
        featuredImg: {
            small: 'https://www.travcamp.com:444/wp-content/uploads/2018/05/sea-and-pool-view-AMC-Royal-hurghada-300x175.jpg',
            large: 'https://www.travcamp.com:444/wp-content/uploads/2018/05/sea-and-pool-view-AMC-Royal-hurghada.jpg'
        },
        description: "أطفال وأسرّة أخرى جميع الأطفال هم على الرحب والسعة الإقامة مجانية لطفل واحد أصغر من 12 سنة عند استخدام الأسرّة الموجودة. يتوجّب دفع 50 % من سعر الإقامة في الغرفة لليلة الواحدة والشخص الواحد، لشخص إضافي واحد بين 6 سنوات و12 سنة في سرير إضافي تستوعب الغرفة سريراً إضافياً واحداً كحد أقصى سرير أطفال واحد يتوفّر أي نوع من الأسرّة الإضافية عند الطلب ويحتاج ذلك إلى تأكيد من قِبل الإدارة. لن يتم حساب الزيادات تلقائياً في التكلفة النهائية، ويجب دفعها بشكل منفصل خلال إقامتك"
    },
    {
        title: " شركة رايت تورز &#8211; Right Tours-أيكوتيل دهب باي ڤيو ريزورت-فطار وعشاء-4",
        rating: "2",
        agency: {name: 'Agency Name 2', email: 'agency_02@gmail.com', plan:'free'},
        days: "4",
        mealPlan: "فطار فقط",
        featuredImg: {
            small: 'https://www.travcamp.com:444/wp-content/uploads/2018/07/Pool-2-Ecotel-Dahab-Travcamp-300x175.jpg',
            large: 'https://www.travcamp.com:444/wp-content/uploads/2018/07/Pool-2-Ecotel-Dahab-Travcamp.jpg'
        },
        description: "أطفال وأسرّة أخرى جميع الأطفال هم على الرحب والسعة الإقامة مجانية لطفل واحد أصغر من 12 سنة عند استخدام الأسرّة الموجودة. يتوجّب دفع 50 % من سعر الإقامة في الغرفة لليلة الواحدة والشخص الواحد، لشخص إضافي واحد بين 6 سنوات و12 سنة في سرير إضافي تستوعب الغرفة سريراً إضافياً واحداً كحد أقصى سرير أطفال واحد يتوفّر أي نوع من الأسرّة الإضافية عند الطلب ويحتاج ذلك إلى تأكيد من قِبل الإدارة. لن يتم حساب الزيادات تلقائياً في التكلفة النهائية، ويجب دفعها بشكل منفصل خلال إقامتك"
    },
    {
        title: "رض شركة رايت تورز &#8211; Right Tours-بيراميزا سهل حشيش بيتش ريزورت-إقامة شاملة جميع الوجبات والمشروبات-4",
        rating: "3",
        agency: {name: 'Agency Name 3', email: 'agency_03@gmail.com', plan:'premium'},
        days: "7",
        mealPlan: "فطار وعشاء",
        featuredImg: {
            small: 'https://www.travcamp.com:444/wp-content/uploads/2018/09/20-Old-Palace-Sahel-Hashesh-G-300x175.jpg',
            large: 'https://www.travcamp.com:444/wp-content/uploads/2018/09/20-Old-Palace-Sahel-Hashesh-G.jpg'
        },
        description: "أطفال وأسرّة أخرى جميع الأطفال هم على الرحب والسعة الإقامة مجانية لطفل واحد أصغر من 12 سنة عند استخدام الأسرّة الموجودة. يتوجّب دفع 50 % من سعر الإقامة في الغرفة لليلة الواحدة والشخص الواحد، لشخص إضافي واحد بين 6 سنوات و12 سنة في سرير إضافي تستوعب الغرفة سريراً إضافياً واحداً كحد أقصى سرير أطفال واحد يتوفّر أي نوع من الأسرّة الإضافية عند الطلب ويحتاج ذلك إلى تأكيد من قِبل الإدارة. لن يتم حساب الزيادات تلقائياً في التكلفة النهائية، ويجب دفعها بشكل منفصل خلال إقامتك"

    },
    {
        title: "Right Tours-أيه أم سي رويال-إقامة شاملة جميع الوجبات والمشروبات",
        rating: "5",
        agency: {name: 'Agency Name 4', email: 'agency_04@gmail.com', plan:'free'},
        days: "5",
        mealPlan: "فطار وعشاء",
        featuredImg: {
            small: 'https://www.travcamp.com:444/wp-content/uploads/2018/05/sea-and-pool-view-AMC-Royal-hurghada-300x175.jpg',
            large: 'https://www.travcamp.com:444/wp-content/uploads/2018/05/sea-and-pool-view-AMC-Royal-hurghada.jpg'
        },
        description: "أطفال وأسرّة أخرى جميع الأطفال هم على الرحب والسعة الإقامة مجانية لطفل واحد أصغر من 12 سنة عند استخدام الأسرّة الموجودة. يتوجّب دفع 50 % من سعر الإقامة في الغرفة لليلة الواحدة والشخص الواحد، لشخص إضافي واحد بين 6 سنوات و12 سنة في سرير إضافي تستوعب الغرفة سريراً إضافياً واحداً كحد أقصى سرير أطفال واحد يتوفّر أي نوع من الأسرّة الإضافية عند الطلب ويحتاج ذلك إلى تأكيد من قِبل الإدارة. لن يتم حساب الزيادات تلقائياً في التكلفة النهائية، ويجب دفعها بشكل منفصل خلال إقامتك"

    },
    {
        title: " شركة رايت تورز &#8211; Right Tours-أيكوتيل دهب باي ڤيو ريزورت-فطار وعشاء-4",
        rating: "2",
        agency: {name: 'Agency Name 5', email: 'agency_05@gmail.com', plan:'premium'},
        days: "4",
        mealPlan: "فطار فقط",
        featuredImg: {
            small: 'https://www.travcamp.com:444/wp-content/uploads/2018/07/Pool-2-Ecotel-Dahab-Travcamp-300x175.jpg',
            large: 'https://www.travcamp.com:444/wp-content/uploads/2018/07/Pool-2-Ecotel-Dahab-Travcamp.jpg'
        },
        description: "أطفال وأسرّة أخرى جميع الأطفال هم على الرحب والسعة الإقامة مجانية لطفل واحد أصغر من 12 سنة عند استخدام الأسرّة الموجودة. يتوجّب دفع 50 % من سعر الإقامة في الغرفة لليلة الواحدة والشخص الواحد، لشخص إضافي واحد بين 6 سنوات و12 سنة في سرير إضافي تستوعب الغرفة سريراً إضافياً واحداً كحد أقصى سرير أطفال واحد يتوفّر أي نوع من الأسرّة الإضافية عند الطلب ويحتاج ذلك إلى تأكيد من قِبل الإدارة. لن يتم حساب الزيادات تلقائياً في التكلفة النهائية، ويجب دفعها بشكل منفصل خلال إقامتك"

    },
    {
        title: "رض شركة رايت تورز &#8211; Right Tours-بيراميزا سهل حشيش بيتش ريزورت-إقامة شاملة جميع الوجبات والمشروبات-4",
        rating: "3",
        agency: {name: 'Agency Name 6', email: 'agency_06@gmail.com', plan:'free'},
        days: "7",
        mealPlan: "فطار وعشاء",
        featuredImg: {
            small: 'https://www.travcamp.com:444/wp-content/uploads/2018/09/20-Old-Palace-Sahel-Hashesh-G-300x175.jpg',
            large: 'https://www.travcamp.com:444/wp-content/uploads/2018/09/20-Old-Palace-Sahel-Hashesh-G.jpg'
        },
        description: "أطفال وأسرّة أخرى جميع الأطفال هم على الرحب والسعة الإقامة مجانية لطفل واحد أصغر من 12 سنة عند استخدام الأسرّة الموجودة. يتوجّب دفع 50 % من سعر الإقامة في الغرفة لليلة الواحدة والشخص الواحد، لشخص إضافي واحد بين 6 سنوات و12 سنة في سرير إضافي تستوعب الغرفة سريراً إضافياً واحداً كحد أقصى سرير أطفال واحد يتوفّر أي نوع من الأسرّة الإضافية عند الطلب ويحتاج ذلك إلى تأكيد من قِبل الإدارة. لن يتم حساب الزيادات تلقائياً في التكلفة النهائية، ويجب دفعها بشكل منفصل خلال إقامتك"

    },
];

async function seed() {
    await mongoose.connect(config.get("db"));

    await Tour.deleteMany({});

    for (let tour of data) {
        await new Tour(tour).save();
    }

    await mongoose.disconnect();
    console.info("Done!");
}

seed();
