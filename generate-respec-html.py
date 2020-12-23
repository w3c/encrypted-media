#!/usr/bin/env python3
"""
Use WebDriver to automate generation of spec HTML using w3c/respec
"""

import os
import selenium.webdriver
import sys
import urllib.request

if len(sys.argv) != 2:
  print('usage: %s RESPEC_HTML > GENERATED_HTML' % sys.argv[0], file=sys.stderr)
  sys.exit(1)

# Create an absolute path from the RESPEC_HTML argument, then turn that into a
# file URL to load in the browser.
html_path = os.path.abspath(sys.argv[1])
url = 'file://' + html_path

# Create options for a headless instance of Chrome.
chrome_options = selenium.webdriver.chrome.options.Options()
chrome_options.add_argument('--headless')

# Ask selenium to start Chrome.  This requires chromedriver to be in $PATH.
driver = selenium.webdriver.Chrome(options=chrome_options)
driver.get(url)

# Inject JavaScript to:
# 1. Wait for respec to be ready
# 2. Call the core/exporter module's rsDocToDataURL to get the HTML encoded as a
#    data URI
data_uri = driver.execute_async_script('''
const done = arguments[arguments.length - 1];
(async function() {
  await document.respecIsReady;
  done(require.modules['core/exporter'].rsDocToDataURL('text/html'));
})();
''');

# Read the data URI to get the generated HTML.
with urllib.request.urlopen(data_uri) as response:
  html = response.read()

# Shut down the browser.
driver.quit()

# Dump the HTML to stdout.
print(html.decode('utf-8'))
