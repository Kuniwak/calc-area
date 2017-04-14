#!/bin/bash -eu -o pipefail

diff -u <(node lib/LineReader.run.js < radius.dummy.list) <(echo '["13.83","7.378"]') && echo OK || echo NG
