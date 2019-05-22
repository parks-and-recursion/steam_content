import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  font-size: 12px;
  color: #556772;
  margin-top: 10px;
`;

const InfoRow = styled.div`
  display: flex;
  line-height: 16px;
`;

const ReleaseDateRow = styled.div`
  display: flex;
  line-height: 16px;
  padding-top: 9px;
  padding-bottom: 13px;
`;

const SubtitleColumn = styled.div`
  text-transform: uppercase;
  font-size: 10px;
  padding-right: 10px;
  min-width: 94px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;


const DataColumn = styled.div`
  color: #66C0F4;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const ReleaseDateColumn = styled.div`
  color: #8f98a0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const ResponsiveHidden = styled.span`
`;

class Info extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var allReviewsCount = this.props.positiveReviews + this.props.negativeReviews;
    var allReviewsCondition = 
        reviewStringAndPercentageGenerator(this.props.positiveReviews, this.props.negativeRivews);
    var recentReviewsCount = this.props.recentPositiveReviews + this.props.recentNegativeReviews;
    var recentReviewsCondition = 
        reviewStringAndPercentageGenerator(this.props.recentPositiveReviews, this.props.recentNegativeReviews)
    return(
      <Wrapper>
        <InfoRow>
          <SubtitleColumn>Recent Reviews</SubtitleColumn>
          <DataColumn>{recentReviewsCondition[0]}</DataColumn>
          <ResponsiveHidden>({recentReviewsCount})</ResponsiveHidden>
        </InfoRow>
        <InfoRow>
          <SubtitleColumn>all reviews</SubtitleColumn>
          <DataColumn>{allReviewsCondition[0]}</DataColumn>
          <ResponsiveHidden>({allReviewsCount})</ResponsiveHidden>
        </InfoRow>
        <ReleaseDateRow>
          <SubtitleColumn>release date</SubtitleColumn>
          <ReleaseDateColumn>{this.props.date}</ReleaseDateColumn>
        </ReleaseDateRow>
        <InfoRow>
          <SubtitleColumn>developer</SubtitleColumn>
          <DataColumn>{this.props.developer}</DataColumn>
        </InfoRow>
        <InfoRow>
          <SubtitleColumn>publisher</SubtitleColumn>
          <DataColumn>{this.props.publisher}</DataColumn>
        </InfoRow>
      </Wrapper>
    )
  }
}

var reviewStringAndPercentageGenerator = (positive, negative) => {
  var percentage = positive/(positive + negative);
  var str ='';
  if (percentage >= 0.95) {
    str = 'Overhwelmingly Positive';
  } else if (percentage >= 0.8) {
    str = 'Very Positive';
  } else if (percentage >= 0.7) {
    str = 'Mostly Positive';
  } else if (percentage >= 0.4) {
    str = 'Mixed';
  } else if (percentage >= 0.2) {
    str = 'Mostly Negative';
  } else {
    str = 'Very Negative';
  }

  return [str, String(Math.floor(percentage * 100)) + '%'];
}
export default Info;