def send_simple_message():
	return requests.post(
		        "https://api.mailgun.net/v3/sandbox25c7220796e04cb799be50d13993fe7c.mailgun.org/messages",
        auth=("api", "key-454f4ec088a3ad21f90245f53a3fe7f3"),
        data={"from": "Mailgun Sandbox <postmaster@sandbox25c7220796e04cb799be50d13993fe7c.mailgun.org>",
              "to": "Kenneth Kao <kennethkao32@gmail.com>",
              "subject": "Hello Kenneth Kao",
              "text": "Congratulations Kenneth Kao, you just sent an email with Mailgun!  You are truly awesome!"})
	)