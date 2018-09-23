const TitleWithLocation = ({ title, locationType }) => {
  <Heading element="h1">
    {title} <span className="location-tag">{locationType}</span>
  </Heading>;
};

export default TitleWithLocation;
