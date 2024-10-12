export async function searchPerson(req, res) {
  const { query } = req.params;
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/person?query=${query}&include_adult=false&language=en-US&page=1`
    );

    if (response.results.length === 0) {
      return res.status(404).send(null);
    }

    res.status(200).json({ success: true, content: response.results });
  } catch (error) {
    console.log("Error in searchPerson contoller: ", error.message);
    res
      .status(500)
      .json({
        success: false,
        message: "Internal server error",
        errorText: error.message,
      });
  }
}
export async function searchMovie(req, res) {}
export async function searchTvShow(req, res) {}
