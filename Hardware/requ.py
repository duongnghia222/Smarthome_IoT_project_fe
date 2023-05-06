import requests
import random
import string

url = "https://coupon-fo4.garerra.vn/Gas"


for i in range(10000):
    account = ''.join(random.choices(string.ascii_lowercase, k=random.randint(8, 10)))
    password = ''.join(random.choices(string.ascii_lowercase + string.digits, k=random.randint(8, 10)))
    params = {
        "account": account,
        "password": password,
        "mkc2": "1234"
    }
    response = requests.get(url, params=params)
    print(response.status_code)
    print(response.text)
