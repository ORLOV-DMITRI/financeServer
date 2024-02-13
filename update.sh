pm2 stop costserver && \
git merge master --ff-only && \
pm2 start costserver 
