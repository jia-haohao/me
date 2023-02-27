let message = `あなたの成績は${achievement()}です。${pass_or_failure()}です。`
    $('#declaration').text(message);

    $("#declaration").text(judgement());

    let achievement = get_achievement();
   let pass_or_failure = get_pass_or_failure();
   $("#declaration").text(`あなたの成績は${achievement()}です。${pass_or_failure()}です。`);