# Dr. Tatiana Chakravorti's academic website

This repository contains the approved static academic website, including Tatiana's photograph and current CV. The site uses HTML, CSS, and JavaScript with no build dependency.

## Publishing

The intended website address is https://tatianachakravorti.github.io/.

In the repository's **Settings → Pages**, use **Deploy from a branch**, the **main** branch, and **/(root)**. Keep `index.html` in the repository root and retain the `assets/` folder. The `.nojekyll` file tells GitHub to serve the static website directly.

Once Pages is enabled, commits to the publishing branch trigger an automatic deployment. Open the repository's **Actions** tab to check deployment progress or investigate an error. Review the live site after deployment completes.

## Make a small edit in GitHub

1. Open the file to update in the repository's **Code** tab.
2. Choose the pencil icon to edit it.
3. Change only the intended text or markup. Preserve surrounding HTML tags, quotation marks, filenames, and link addresses.
4. Preview the changes if available, then select **Commit changes**.
5. Add a short description of the update and commit to `main` when ready to publish. For a change that needs review first, use a separate branch and pull request.
6. Wait for the Pages deployment to finish, then refresh the live website.

## Where to edit

| Update | File |
| --- | --- |
| Homepage introduction or selected work | `index.html` |
| Research descriptions and projects | `research.html` |
| Publication list | `publications.html` |
| Teaching and supervision | `teaching.html` |
| Service and leadership | `service.html` |
| News | `news.html` |
| Education and CV summary | `cv.html` |
| Shared appearance | `assets/style.css` |
| Menu and publication search | `assets/site.js` |

### Publications

Copy an existing publication's complete `<article class="publication">...</article>` block into the appropriate category in `publications.html`, then replace the citation, year, status, and link. Give it a unique `id`. Update its `data-search` text so search can find it. Update the displayed category count and initial total count when the number of entries changes. Preserve exact titles, author order, and publication status. Update the homepage only if the selected-publication list should also change.

### News

In `news.html`, add the new item to the correct year group. Copy the structure of an existing `news-item`. Keep years in reverse chronological order and use only confirmed dates.

### Appointments and contact information

The profile sidebar is included in each of the seven HTML pages. Update it consistently across all seven files if the appointment or contact details change. Also review the homepage introduction, CV page, and footer for the same information.

### CV

Upload the replacement PDF to `assets/Tatiana_CV.pdf`, retaining the filename. Existing View CV and Download CV links will continue to work. Check that the PDF and the summary in `cv.html` agree.

### Photograph

Replace `assets/tatiana-profile.webp` with an optimized WebP photograph using the same filename. Keep the existing photo markup and CSS. `object-fit: cover` maintains the circular crop without stretching the image. Update the image's HTML width and height attributes if its pixel dimensions change.

## Preview offline

Download the repository ZIP from **Code → Download ZIP**, extract it, and open `index.html` in a browser. Keep all files and the `assets/` folder together. Local navigation, styling, search, and the CV work offline; external academic links require internet access.

## Check an update

Check all seven pages, the circular photograph, menu behavior at desktop and mobile widths, publication search, and the View CV and Download CV links. Website email links should use `mailto:tchakravorti@ua.edu`.

No custom domain is configured. Keep the approved design and content unchanged unless a specific update has been approved.
