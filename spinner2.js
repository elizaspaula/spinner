let spinner = ["\r|   ", "\r/   ", "\r-   ", "\r\\   "];
let delay = 0;

for (const r of spinner) {
  setTimeout(() => {
    process.stdout.write(r);
  }, delay);
  delay += 200;
}
