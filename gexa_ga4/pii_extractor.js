function cleaner(link) {
  try {
    var filter = [
      {
        replacement: '[REDACTED_EMAIL]',
        regex: /[^\/]{4}(@|%40)(?!gexaenergy\.com)[^\/]{4}/gi,
      },
      {
        replacement: '[REDACTED_SELF_EMAIL]',
        regex: /[^\/]{4}(@|%40)(?=gexaenergy\.com)[^\/]{4}/gi,
      },
      {
        replacement: 'tel=[REDACTED_TEL]',
        regex: /((phone.number=)|(tel=)|(telephone=)|(phone=)|(mobile=)|(mob=))[\d\+\s][^&\/\?]+/gi,
      },
      {
        replacement: 'name=[REDACTED_NAME]',
        regex: /((realname=)|(name=)|(firstname=)|(lastname=)|(surname=))[^&\/\?]+/gi,
      },
      {
        replacement: 'username=[REDACTED_USERNAME]',
        regex: /((username=))[^&\/\?]+/gi,
      },
      {
        replacement: 'username=[REDACTED_USERNAME]',
        regex: /((\?username=))[^&\/\?]+/gi,
      },
      {
        replacement: 'password=[REDACTED_PASSORD]',
        regex: /((password=)|(passwd=)|(pass=))[^&\/\?]+/gi,
      },
      {
        replacement: 'zip=[REDACTED_ZIP]',
        regex: /((postcode=)|(zipcode=)|(zip=))[^&\/\?]+/gi,
      },
      {
        replacement: 'address=[REDACTED_ADDRESS]',
        regex: /((city=)|(addressline1=)|(address=))[^&\/\?]+/gi,
      },
    ];

    filter.forEach(function (item) {
      var stringMatch = link.match(item.regex);
      if (stringMatch) {
        link = link.replace(
          item.regex,
          encodeURIComponent(item.replacement + stringMatch[0].slice(-1))
        );
      }
    });

    return link;
  } catch (e) {
    return undefined;
  }
}
/*
cleaner(
  'www.gexaenergy.com/test?tel=+44012345678&email=brian@me.com&email=bclifton@DOMAIN.com&firstname=brian&password=hello&zip=8654&address=vert_street_16'
);*/
