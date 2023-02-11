const ARTICLES = [
  {
    doi: '10.1101/2023.02.03.527007',
    title: `Exchange Rate Pass-Through: Evidence Based on Vector Autoregression with Sign Restrictions`,
    authors: [ 'Lian An', 'Jian Wang' ],
    abstract: `We estimate exchange rate pass-through (PT) into import, producer and
    consumer price indexes for nine OECD countries, using a method proposed by Uhlig
    (2005). In a Vector Autoregression (VAR) model, we identify the exchange rate
    shock by imposing restrictions on the signs of impulse responses for a small subset
    of variables. These restrictions are consistent with a large class of theoretical models
    and previous empirical findings. We find that exchange rate PT is less than one at
    both short and long horizons. Among three price indexes, exchange rate PT is
    greatest for import price index and smallest for consumer price index. In addition,
    greater exchange rate PT is found in an economy which has a smaller size, higher
    import share, more persistent exchange rate, more volatile monetary policy, higher
    inflation rate, and less volatile aggregate demand.`,
    body: [
      `Exchange rate pass-through (PT), the degree to which exchange rate changes are
      passed on into aggregate prices, has long piqued the interests of economists and
      policymakers. A thorough understanding of exchange rate PT to aggregate prices is
      of extreme importance for several reasons. First, the degree and timing of exchange
      rate PT is important for understanding inflation dynamics, which is a key issue for
central banks. Second, the degree of exchange rate PT affects the strength of the
expenditure-switching effect, which is an important channel for the international
transmission of country-specific shocks.1
Given its importance, exchange rate PT has been widely studied in the literature
during the last decade. A strand of the literature studies exchange rate PT to import
price index (IMP), producer price index (PPI), and consumer price index (CPI) in a
unified framework, using vector autoregression (VAR) models. For instance, see
Hahn (2003), Ito et al. (2005), Choudhri and Hakura (2006), and McCarthy (2007),
among others. These studies are based on the observation that a large fraction of
imports are intermediate goods that are used to produce final consumption goods.
Final goods must also go through distribution processes before they are consumed
by households. IMP, PPI, and CPI partially reflect the prices of imports at different
production and distribution stages. As a result, shocks to prices at an earlier stage of
production and distribution may affect prices (with a lag) at a later state, but not the
other way around. For instance, it is assumed that shocks to IMP can affect PPI and
CPI with one or more lags, while PPI and CPI shocks do not affect IMP directly. The
VAR model incorporating IMP, PPI, and CPI and this identification assumption are
termed as “distribution chain of pricing model”. The exchange rate shock in these
studies is often identified from recursive restrictions of the Choleski decomposition.
Exchange rate PT is then analyzed by examining the impulse responses of prices
with respect to the exchange rate shock. There are several merits of using the VAR
methodology with distribution chain of pricing. For instance, it avoids the
endogeneity problem inherent in single-equation models and it incorporates the
distribution chain of pricing in a unified framework.
However, a stationary VAR model with the Choleski decomposition inherently
has two drawbacks. First, the standard recursive identification assumptions, in which
some variables can or cannot respond to other variables in the first period of a shock,
are very stringent and can have a great impact on results. Some assumptions may be
developed over time in a “data-mining like manner” when researchers look for
restrictions that can provide sensible results (see Rudebusch 1998). Indeed, the zero
restrictions on the contemporaneous impact of shocks might not be consistent with a
large class of general equilibrium models (see Canova and Pina 1999). Second, there
are shortcomings associated with a differenced VAR system. Decision on which
variables to difference is, to some extent, arbitrary because it is difficult to
distinguish between trend- and difference-stationary variables in the data. The
potential misspecification could impinge on the estimated dynamics of a differenced
VAR model. With the data generated from a dynamic stochastic general equilibrium
model and Monte Carlo techniques for statistical inferences, Bache (2005) finds that
impulse response functions from a VAR model in first difference are biased when
estimating exchange rate PT, even when the VAR model is specified with a large
number of lags. In contrast, a low order vector cointegration model is a good
approximation to the data generating process and cointegration can capture the
equilibrium relationships among the variables.
Based on the above drawbacks, we adopt a VAR model in levels with the sign
restriction approach developed by Uhlig (2005) to estimate exchange rate PT. There
are several advantages for the sign restriction approach. First, in the traditional
structural VAR model, sign restrictions from conventional views are often used
implicitly as criteria to check the validity of identifying assumptions. In the sign
restriction approach, those restrictions are made more explicit by being imposed
directly on impulse responses. Second, in estimating impulse responses, the sign
restriction approach takes into account both data and identification uncertainty by
simulation. Third, sign restrictions are weak in that they do not lead to exact
identifications of the reduced form VAR. This is an important advantage because it
circumvents “incredible” zero restrictions on the contemporaneous and long-run
impact of shocks. Finally, the sign restriction method involves the Bayesian Monte
Carlo procedure, which, according to Sims (1988), does not require differencing.
Thus the sign restriction approach can avoid much of the subtle specification issues
for observationally equivalent trend- and difference-stationary variables in VAR.
In this paper, the sign restrictions on impulse responses are imposed such that a
plausible identification of exchange rate shocks is achieved. The extent of exchange
rate PT to prices along the distribution chain is then quantified by examining the
impulse response functions. To the best of our knowledge, this is the first attempt of
studying exchange rate PT with the sign-restriction strategy. Nine OECD countries
are included in our study: Canada, Finland, Italy, Japan, South Korea, Spain,
Sweden, the United Kingdom (UK), and the United States (US). We use monthly
data and the sample period is from 1980:m1 to 2007:m8. Both the exchange rate and
international trade behaved differently during the recent global financial crisis that
started in the second half of 2007. We therefore choose the ending date of August
2007 in our sample to avoid the effect of the global financial crisis on our results.
For instance, Levchenko et al. (2009) and Wang (2010) show that US trade dropped
much more in this recession than in previous ones. The exchange rate during this
period was also driven by factors that are not commonly observed during normal
times. For instance, Engel and West (2010) document that the strength of the US
dollar in 2008 and 2009 is mainly driven by the flight-to-safety effect.
To preview the results, our paper has the following findings. First, the empirical
results are supportive of partial exchange rate PT for most countries, and the
magnitudes of the PT estimates are broadly in line with previous literature. Second,
the degree of PT declines along the distribution chain. The unweighted average PT
ratios of IMP, PPI, and CPI are, respectively, 0.31–0.88, 0.16–0.27, and 0.02–0.10
for the first 16 horizons. Third, exchange rate PT varies across countries. By using
the Spearman rank correlation, we explore macroeconomic factors that affect crosscountry heterogeneity of exchange rate PT. We document that a greater PT
coefficient is found in an economy with a smaller size, higher import share, more
persistent exchange rate, more volatile monetary policy, higher inflation rate and
more stable aggregate demand.
The rest of the paper is organized as follows. Section 2 provides the theoretical
background and Section 3 describes our VAR model with sign restrictions. Section 4
reports our estimates of exchange rate PT with the sign restriction method. We also
examine the factors determining exchange rate PT across countries in this section.
Section 5 provides a robustness check and Section 6 concludes.
The extent of exchange rate PT into aggregate price indexes is found to vary across
countries in empirical studies. This section provides a brief review of the theoretical
background on the macroeconomic determinants of exchange rate PT to aggregate
prices.
Mann (1986) and Taylor (2000), among others, have identified a list of
macroeconomic variables affecting exchange rate PT to aggregate prices, notably,
the size of a country, the openness of a country, exchange rate volatility, the
persistence of exchange rate shocks, aggregate demand volatility, inflation and
monetary policy environment.
In theory, the size of a country (measured by real GDP in US dollars in our
empirical study) is inversely related to the extent of PT for two reasons. First, the
inflationary effect of depreciation in a large economy will lower its demand for
imports. When the economy is a large importer in the world market, the world price
of the imports will decline, which reduces the measured PT. Second, foreign
exporters have more incentives to maintain their market shares in a larger market. As
a result, they are more likely to absorb some of exchange rate changes for exports to
bigger countries by reducing their profit margins.
Openness, which is measured by the ratio of imports to GDP, may be a good
proxy for the import penetration faced by firms. Greater import penetration may be
an indicator of less competition from domestic producers. As a result, foreign
companies may pass more exchange rate changes to importing countries. For
instance, Feinberg (1986, 1989) find that exchange rate PT is larger in industries that
face greater import penetration. It may be reasonable to expect that a country with a
higher import share will also face larger exchange rate PT to its aggregate prices.
Using the pricing to market principle, Mann (1986) discusses why exchange rate
volatility can negatively affect exchange rate PT. Suppose that prices are set in the
importing country’s currency. If exchange rate changes are volatile, but mainly
transitory, foreign exporters will not change prices as frequently as the exchange rate
to avoid the cost of adjusting prices.2 In this case, they would rather adjust their
profit margins, thus reducing exchange rate PT.
In similar spirit, the persistence of exchange rate movements can positively affect
exchange rate PT. If firms expect that an appreciation/depreciation will last for a
long period into the future, they are more likely to pass exchange rate changes to
prices.
Another economic variable put forward by Mann (1986) is aggregate demand
uncertainty. When aggregate demand is unstable, foreign exporters are wary of
losing market share should they increase prices in response to exchange rate
movements. Therefore, they will alter profit margins when aggregate demand
fluctuates significantly in an imperfectly competitive environment, reducing
measured PT.
A further determinant of exchange rate PT is inflation environment, which was
brought forward by Taylor (2000). According to Taylor (2000), perceived
persistence of cost changes is likely to be positively correlated to the persistence of aggregate inflation, which is usually positively correlated with the level of the
inflation rate.3 So in a macroeconomic environment with a low inflation rate, an
increase in (nominal) marginal cost will be less persistent than in an environment
with a high inflation rate. Firms usually adjust their prices to a less extent in
response to a cost change when the cost change is expected to be less persistent. As a
result, low inflation environment may entail low PT of exchange rate shocks to
prices via a reduction in the expected persistence of shocks.
A factor related to inflation environment is the stability of the monetary policy
environment. Devereux et al. (2003) develop a model of endogenous exchange rate
PT when prices are sticky and exporting firms can choose which currency to set their
prices. They find that countries with stable monetary policy will have relatively low
exchange rate PT because exporting firms will set prices in importer’s currency
when the importing country’s monetary policy is more stable than that in the
exporting country. In an extreme case that all import prices are set in the importing
country’s currency, import prices do not respond to exchange rate changes at all in
the short run under sticky prices.
Besides cross-country difference in exchange rate PT, the variation in exchange
rate PT at different stages of the distribution chain is also of great interest. Exchange
rate shocks may affect prices at different stages, both directly and indirectly, through
previous price stages. To be more specific, exchange rate movements are transmitted
to PPI and CPI through two channels: (i) through changes in the prices of imported
intermediate goods, and (ii) through changes in the prices of domestically produced
goods in response to price changes of imported goods. The extent of PT to PPI and
CPI will therefore depend on exchange rate PT to IMP, the share of imports in PPI
and CPI, and responses of prices of domestically produced goods to exchange rate
movements.
If prices of domestically produced goods respond less to exchange rate changes
than prices of imported goods, the degree of exchange rate PT declines along the
distribution chain for two reasons. First, the share of imported goods usually
decreases along the distribution chain, leading to declining PT (see Clark 1999).
Second, since PT is incomplete at each stage, accumulation over different stages also
implies a decline in exchange rate PT along the distribution chain.
A Simple VAR Model with the Sign Restrictions
This section consists of two parts. The first part sets up the baseline model and the
second part describes the sign restriction approach.
3.1 The VAR Model
Our VAR model draws on the “distribution chain” model in the literature and
consists of eight endogenous variables: oil price (Poil), the short-term interest rate
(S), output gap (GAP), the nominal effective exchange rate (NER), foreign export
price index (FP), IMP, PPI, and CPI. Our sample includes monthly data for nine OECD countries over the period 1980:m1 to 2007:m8: Canada, Finland, Italy, Japan,
South Korea, Spain, Sweden, the UK, and the US.
Oil price is measured by the Brent spot price of petroleum obtained from
International Financial Statistics (IFS). It is used to capture supply shocks. Output
gap is used to capture demand shocks and is measured by industrial production
detrended by linear and quadratic time trends.4 Industrial production data are
obtained from IFS. Output gap acts as a proxy for demand fluctuations over business
cycles where a positive (negative) number indicates that the economy is growing
faster (slower) than the trend. This variable is important because exchange rate PT is
affected by macroeconomic conditions (i.e., aggregate demand). For example, when
the economy is in recession, firms usually refrain from increasing prices in response
to currency depreciations as they are wary of losing market share when aggregate
demand is low.
The short-term (three-month) interest rate is included to allow for potential effects
of monetary policy and the data are obtained from IFS. Empirical evidence shows
that some central banks respond to exchange rate changes when setting the policy
rate. For instance, Clarida, et al. (1998) find that the German central bank adjusted
its policy rate in response to exchange rate movements. The connection between
changes in the exchange rate and domestic prices through the monetary policy may
be neglected if the nominal interest rate is excluded from the analysis (see Hahn
2003).
Foreign export price level is also essential in modeling exchange rate PT and the
data are constructed in the same way as the effective nominal exchange rate that is
described in footnote 6. Suppose that import price index in country i, Pm,i
, equals the
export price in its trading partners, Px,i, times the bilateral exchange rate:
Pm;i ¼ ERi
Px;i ð1Þ
where the exchange rate (ER) is quoted as domestic currency per unit of foreign
currency.
Further suppose that the export price is a mark-up (markupx
) over the exporter’s
marginal costs MCx
. Using lower letters to denote logarithms of upper-case letters,
Eq. 1 can be rewritten as:
pm;i ¼ er þ markupx þ mcx
: ð2Þ
Changes in the exchange rate can have direct effects on import prices according to
Eq. 2. In addition, they can also affect mark-ups and marginal costs of exporting
firms. In the presence of short-run price rigidity, mark-ups will fall with exporting
firms’ currency appreciation and rise with a currency depreciation (Kim 1990).
Marginal costs may also decrease when exporting country’s currency appreciates if
some of exporter’s inputs are imported from other countries. Imported inputs used by
exporters become cheaper when exporting country’s currency appreciates. For
instance, see Devereux and Genberg (2010). Foreign export price index is included
to control for the indirect transmission of exchange rate changes to domestic prices
through mark-ups and marginal costs of trading partners. The exchange rate, IMP, PPI, and CPI are the focus of our analysis, so they are
naturally included. Effective nominal exchange rates are calculated from bilateral
exchange rates and shares of trade.5 The exchange rate is constructed in such a way
that an increase in the index implies a depreciation of the domestic currency. IMP,
PPI, and CPI in each country are obtained from IFS.
The model is summarized in the reduced-form VAR:
Yt ¼ Γ0 þXn
i¼1
BiYti þ ut; ð3Þ
where Yt is an 8×1 vector of variables [Poil, S, GAP, NER, FP, IMPP, PPI, CPI]
′
, Bi
are 8×8 coefficient matrices, ut is the one-step ahead prediction error with variancecovariance matrix Σ, and Γ0 is the intercept. All variables are in logarithms except
the short-term interest rate. The number of lags in the VAR is set at the shortest lag
length that can produce white noise residuals, which turns out to be 5 for the US and
6 for other countries in our sample.
3.2 The Sign Restriction Approach
Different identification methods are employed by economists to decompose the
prediction error ut in Eq. 3 into economically meaningful fundamental innovations.
For instance, works relying on the Choleski decomposition method usually assume
different orderings among the variables, based on assumptions about the transmission mechanism of shocks. In this paper, we employ the sign restriction approach
developed by Uhlig (2005). This approach does not aim to achieve a complete
decomposition of one-step-ahead prediction errors into all components due to
underlying structural shocks. Instead, it focuses on only identifying the shock(s) of
interest. The intention is to be “minimalistic and to impose not (much) more than the
sign restrictions themselves” (Uhlig 2005, p.p. 385), as these restrictions can be
reasonably agreed upon by many economists. For example, most previous studies
find that the depreciation of domestic currency will lead to an increase in IMP, PPI
and CPI. The primary interest of this paper is to obtain evidence on how exchange
rate shocks affect different prices over time. Instead of identifying all structural
disturbances, the model uses minimal restrictions that are sufficient to identify the
exchange rate shock and then quantifies the extent of price changes to exchange rate
changes.
The method involves a rejection based Bayesian Monte Carlo procedure. It
consists of “outer-loop draws” and “inner-loop draws”, which takes into account the data and identification uncertainty, respectively.6 As the first step of the simulation,
which is “outer-loop draws”, n1 random draws are taken from the posterior
distribution of the reduced form VAR coefficients, Bi, and the covariance matrix of
disturbance, ∑.
7 Each draw from the posterior distribution of the VAR parameters is
decomposed with the Choleski decomposition. In the second step, n2 draws are
randomly taken from the unit sphere assuming a flat prior, which is the “inner-loop
draws”.
8 Thus, n1×n2 draws and n1×n2 corresponding sets of impulse responses to
exchange rate shocks are generated.9 Only the impulse responses, whose ranges are
compatible with the sign restrictions, are kept and used to calculate the median
impulse response and the probability bands.
The following sign restrictions are imposed on impulse responses:
1. The short-term interest rate does not decrease (≥0) in response to a positive
exchange rate shock, i.e., an exchange rate depreciation, because the monetary
policy will tighten to support the currency. This restriction is consistent with the
finding of Clarida et al. (1998).
2. By definition, the exchange rate will not decrease (≥0) in response to its own
positive shocks.
3. The foreign export price index does not increase (≤0) in response to a positive
exchange rate shock, as the mark-up and costs of imported inputs decrease when
foreign firms’ currency appreciates.
4. The IMP, PPI, and CPI do not decrease (≥0) in response to a depreciation of the
domestic currency.
These restrictions are reasonable because they simply make use of a priori
appealing and consensual views about the effects of exchange rate shocks on
monetary policy and various prices. However, there is a potential shortcoming if we
impose restrictions on all three prices (IMP, PPI, and CPI). Imposing ex ante
restrictions on the responses of IMP, PPI, and CPI to exchange rate shocks could
taint our results because the response of these variables to the exchange rate is
exactly what we tend to estimate from the data. One obvious strategy could be to
release all sign restrictions on prices. However, it leaves only three sign restrictions
in our model, which would be insufficient to disentangle the exchange rate shock
from other shocks. In order to examine the response of prices to exchange rate
shocks as agnostically as possible, and at the same time, make sure that exchange
rate shocks can be identified from other shocks, the restriction on a price is relaxed
when examining exchange rate PT to that price. For example, the sign restriction on
IMP is relaxed when we study PT to IMP, and so on.
When imposing sign restrictions, we need to specify the horizon of the
restrictions, in other words, for how many periods the responses remain positive or negative. We follow the convention of setting horizon (K) equals five and leave
other possible values of K as robustness checks.
4 Results
This section first reports the estimated exchange rate PT into various price indexes in
each country. Differences between our results and previous studies are discussed. We
then explore the cross-country difference in exchange rate PT by calculating the
Spearman rank correlations between the PT estimates and the macroeconomic factors
discussed in Section 2.
4.1 Exchange Rate PT to Aggregate Prices
Figure 1 displays the impulse responses of IMP, PPI, and CPI to a one-standarddeviation positive exchange rate shock (indicating depreciation) in each country over
48 months. We plot in each chart the median of estimated responses and the 16%
and 84% quintiles. It is interesting to note that the error bands are typically
symmetric around the median. Our main results of the impulse responses include:
1. IMP, PPI, and CPI in most countries increase immediately following a positive
exchange rate shock. This is consistent with the conventional view that a
depreciation of a currency generally induces an increase in aggregate prices.
2. The reaction of output to the exchange rate shock is ambiguous across countries.
Output gap increases in the US, Canada, and Finland, but decreases in Sweden,
the UK, and South Korea following a positive exchange rate shock. Output gap
does not significantly react to the exchange rate shock in Italy, Japan, and Spain.
This result is consistent with previous empirical findings that the exchange rate
depreciation can be either expansionary or contractionary in different countries
and during different sample periods.
3. The short-term interest rate increases significantly following a depreciation of
the exchange rate in all the countries for 5–12 months. The increase in the
interest rate is consistent with the inflation-targeting monetary policy. The
central banks increase the short-term rate in response to an increase in the CPI
inflation rate following a depreciation of the exchange rate. In addition, some
central banks may also increase the interest rate to support the exchange rate
when its currency faces depreciation pressures. We acknowledge that part of the
result is also driven by the sign restrictions we impose ex ante.10
To compare exchange rate PT to IMP, PPI, and CPI across countries, we calculate
the PT ratios according to: PTt ¼ P0;t
E0
, where P0,t is the change of a price index from
period 0 to period t, and E0 is the change in the exchange rate on impact of the
exchange rate shock. Figure 2 displays the PT ratios of the price indexes for each
country with 16% and 84% bands over 48 months. Table 1 reports the PT ratios to
IMP, PPI, and CPI in each country at horizons 0, 3, 6, 9, 12, and 15 months. For example, the PT ratio to IMP in the US is 0.62 at the contemporaneous horizon
(horizon 0), 0.5 at the 3-month horizon, and 0.28 at the 6-month horizon. The last
column of Table 1 reports the (un-weighted) average of PT ratios across countries.
For instance, at horizon zero, the average exchange rate PT ratio is 0.56 across 9
OECD countries in our sample. Our main findings can be summarized as follows:
1. In Table 1, the average exchange rate PT estimates in the first 16 periods are
between 0.31 and 0.88 for IMP, 0.16 and 0.27 for PPI, and 0.02 and 0.10 for
CPI. The PT estimates are generally incomplete (less than one) and broadly in
line with previous literature. For instance, the average exchange rate PT ratios of
IMP in Campa and Goldberg (2005) for 23 OECD countries range from 0.46 to
0.64. The average PT ratios to IMP, PPI, and CPI in Choudhri et al. (2005) for
non-US G-7 countries is 0.22–0.73, 0.01–0.15, and 0.02–0.19, respectively. It is
also interesting to note that the PT ratio usually rises above its long-run level
following an exchange rate shock and then reverts back gradually. The
“overshooting” pattern of PT ratios is also present in the IMP PT estimates in
Choudhri et al. (2005).
2. Incomplete PT seems to be common across countries in our sample and at most
horizons. However, there are some cases where the PT ratios are greater than
one, such as IMP PT ratios in Spain at horizons 3, 6, and 9, indicating that
import prices increase more than the depreciation of the exchange rate. In theory,
there are at least two potential reasons for PT ratios being greater than one. First,
the decline of import demand caused by the depreciation of importer’s currency
can increase the producer’s cost in the case of increasing returns to scale. As a
result, import prices can increase more than the depreciation of the exchange
rate. Second, exchange rate pass-through also depends on the demand elasticity.
If the elasticity declines with output, the optimal markup charged by
monopolistic suppliers increases following a depreciation of the importer’s
currency. As a result, the exchange rate PT ratio can be greater than one (Yang
1998). Although similar empirical findings are also documented in several
previous studies, such as Campa and Goldberg (2005), caution should be
exerted when interpreting such findings. The error bands are usually very wide
in these cases, indicating low accuracy in such estimates.
3. In most countries, the PT ratios are largest for IMP, followed by PPI, and
smallest for CPI. This result confirms the previous findings that the exchange
rate PT ratios decline along the distribution chain. The PT ratio of CPI is larger
than PPI for Japan and Sweden at horizons 12 and 15 months. However, the
difference is statistically insignificant.
4. Exchange rate PT to CPI is modest (usually less than 0.1) in most countries
except Sweden. This finding may reflect that final consumption bundles
purchased by households contain a large fraction of nontradable components
such as distribution and retail services. The prices of these nontradable
components are not affected by exchange rate movements, shielding CPI from
exchange rate fluctuations. For instance, Burstein et al. (2005, 2007) find that distribution and retail services account for about half of the retail prices of
consumption goods.
5. There is significant heterogeneity in exchange rate PT ratios across countries for
all aggregate prices at various horizons. For instance, the average PT ratio for
IMP is 0.56 at horizon 0. However, the PT ratio across countries in our sample
ranges from 0.32 (Finland) to 0.95 (Canada).
4.2 Cross-Country Differences in Exchange Rate PT
In this section, we study the potential factors that explain the cross-country
difference in exchange rate PT. Understanding the determinants of exchange rate PT
to aggregate prices is important for the conducting monetary policy. To explain the
cross-country difference, we calculate the Spearman rank correlation at various
horizons between the PT ratios and the macroeconomic variables that are expected to
influence PT.11 From the discussion in Section 2, the factors we consider include: (1) the size of a country measured by the average real GDP converted into US dollars at
the average nominal exchange rate of year 2000; (2) The openness of a country
measured by the average import share of GDP over the sample period; (3) Exchange
rate volatility measured by the variance of the residuals from the exchange rate
equation in the VAR system; (4) Exchange rate shock persistence measured by the
impulse response at the 12-month horizon of the exchange rate to its own initial
shock12; (5) Aggregate demand volatility measured by the variance of real GDP growth
during the sample period; (6) Inflation environment measured by the average annualized
CPI inflation rate in the sample period; (7) Monetary policy stability measured by the
average monthly growth rate of money supply over the sample period. A higher money
supply growth rate indicates a less stable monetary policy environment.
Tables 2 and 3 present the descriptive summary statistics of the above
macroeconomic variables for the nine OECD countries in our sample. To illustrate
the evolution of these variables, we also calculate the summary statistics for subsamples of 1980s, 1990s, and 2000s.
According to Table 2, the inflation rate has declined steadily over the last three
decades in all countries of our sample. There is also some evidence that the average
monthly money supply growth rate has decreased during this period. Among these
countries, Italy, Spain, and South Korea have the relatively high money supply growth
rate and the inflation rate. Note that these countries also have relatively high exchange
rate PT rates in our estimation. South Korea and Finland have the highest variance of
real GDP growth, indicating high aggregate demand volatility. Table 3 shows that the
rank of the country size is stable in our sample with the US and Japan being the two
largest economies and Finland being the smallest. Openness approximated by the
import share has increased steadily over the last three decades in almost all countries.
South Korea, Sweden and Canada have higher import shares. As discussed in
Section 2, if a high import share indicates high domestic market penetration, we expect
high PT in these countries holding other things constant. Japan and South Korea have
the highest exchange rate volatility in our sample while Spain, Italy, and Finland have
experienced the most persistent exchange rate shocks. These factors may increase the
exchange rate PT ratio in these countries according to our discussion in Section 2.
Tables 4, 5 and 6 displays the Spearman rank correlations between PT ratios and
the above macroeconomic variables at horizons 0, 3, 6, and 12 months. The rank
correlations are generally consistent with theoretical predictions discussed in
Section 2. Country size is negatively correlated with PT in general. The negative
relationship is particularly strong for IMP at horizon 6, PPI at horizons 3, 6, and 12,
CPI at horizon 12. This is in contrast with Campa and Goldberg (2005), who do not
find systematic relationship between the country size and exchange rate PT.
Openness (measured by the import share) is positively correlated with PT in most
cases except for IMP at horizon 0 and CPI at horizons 0, 3, and 12, indicating more
open economies have higher PT.
The previous empirical findings are mixed on the relation between PT and
exchange rate volatility. For example, Campa and Goldberg (2005) and Choudhri
and Hakura (2006) report a positive correlation, while McCarthy (2007) and Wei and
Parsley (1995) find a negative one. Our empirical results suggest a negative correlation for IMP and PPI, but a positive (although statistically insignificant) one
for CPI. The correlation between exchange rate persistence and the PT ratios is
positive and significant, consistent with the theory discussed in Section 2.
Aggregate demand volatility, which is approximated by the real GDP growth
volatility, is negatively correlated with the PT ratios in most cases, suggesting that
more volatile aggregate demand is associated with lower PT.
We find a positive relationship between the inflation rate and exchange rate PT in
most cases except for IMP at horizons 0 and 6, CPI at horizon 12. Similar results are
also reported in Choudhri and Hakura (2006). Lastly, a more stable monetary policy
environment leads to lower PT in most cases, which gives support to the theoretical
prediction in Devereux et al. (2003).
Note that the correlation coefficients are statistically significant in more cases for
PT to IMP and PPI than for CPI. This result may reflect the fact that the crosscountry variation in the CPI PT rate is smaller than the variation in IMP and PPI PT
rates.13
In summary, the import share, the persistence of exchange rate shocks, the
inflation rate, and the stability of the monetary policy are positively correlated with
exchange rate PT, while the size of an economy, exchange rate volatility and
aggregate demand (GDP) volatility are negatively correlated with PT. In this section, we show that our results are robust under different values for horizon
K of the sign restrictions. In the benchmark results, K is set to 5. In our robustness
checks, we consider two alternative horizons for sign restrictions: K=2 and K=11.
Figures 3 and 4 present the PT ratios with the 16th and 84th error bands for K=2
and K=11, respectively. The magnitudes and dynamics of estimated PT ratios are
similar to those in our benchmark specification. The only noticeable difference is
that the distance between upper and lower bands of the PT estimates is wider when
K=2 and narrower when K=11 than in our benchmark specification. This finding is not surprising: the more horizons that the restrictions are imposed, the less
uncertainty is allowed in estimation, therefore, the narrower distance between upper
and lower bands.  Conclusion
This paper estimates exchange rate PT to aggregate prices for nine OECD countries,
using a VAR model with sign restrictions. We have the following main findings.
First, the empirical evidence is supportive of partial exchange rate PT for most
countries. The magnitudes of the PT ratios are broadly in line with previous
literature. Second, the extent of PT declines along the distribution chain. The (unweighted) average PT ratios of IMP, PPI, and CPI are 0.31–0.88, 0.16–0.27, and
0.02–0.10 for the first 16 months, respectively. Furthermore, it is found that, a
greater PT coefficient is associated with an economy with a smaller size, higher
import share, more persistent and less volatile exchange rate, less stable monetary
policy environment, higher inflation rate, and less volatile aggregate demand.
An interesting extension to our analysis would be to identify other shocks such as
demand, monetary, and productivity shocks, that drive exchange rate fluctuations. The PT ratio of the exchange rate into aggregate prices may vary with underlying
shocks. For instance, see Shambaugh (2008). We could also compare the relative
importance of these shocks in driving exchange rate movements under such a
framework. We leave these extensions for future research.`
    ]
  },
  {
    doi: '10.1101/2021.10.10.463845',
    title: 'Alcohol tax pass-through across the product and price range: do retailers treat cheap alcohol differently?',
    authors: [
      'Lu Hongyuan',
      'Diaz Daniel J.',
      'Czarnecki Natalie J.',
      'Zhu Congzhi',
      'Kim Wantae',
      'Shroff Raghav',
      'Acosta Daniel J.',
      'Alexander Brad',
      'Cole Hannah',
      'Zhang Yan Jessie',
      'Lynd Nathaniel',
      'Ellington Andrew D.',
      'Alper Hal S.'
    ],
    abstract: `Aims: Effective use of alcohol duty to reduce consumption and harm partly depends on
    retailers passing duty increases on to consumers via price increases; also known as ’passthrough’. The aim of this analysis is to provide evidence of UK excise duty and sales tax
    (VAT) pass-through rates for alcohol products, at different price points.
    Setting: March 2008 to August 2011, UK
    Design and measurement: Panel data quantile regression estimating the effects of three
    duty changes, two VAT changes and one combined duty and VAT change on UK alcohol
    prices, using product-level supermarket price data for 254 alcohol products available weekly.
    Products were analysed in four categories: beers, ciders/ready to drink (RTDs), spirits and
    wines.
    Findings: Within all four categories there exists considerable heterogeneity in the level of
    duty pass-through for cheaper versus expensive products. Price increases for the cheapest
    15 per cent of products fall below duty rises (under-shifting) while products sold above the
    median price are over-shifted (price increases are higher than duty increases). The level of
    under-shifting is greatest for beer (0.85 [0.79, 0.92]) and spirits (0.86 [0.83, 0.89]). Undershifting affects approximately 57% of total beer sales and 30% of total spirits sales.
    Conclusions: Our results show lower pass-through of duty increases for cheaper products
    (lowest 15 percentiles) and over-shifting for expensive products (prices above the median).
    This is likely to impact negatively on tax policy effectiveness. High risk groups, including
    heavy drinkers and particularly low income heavy drinkers, favour cheaper alcohol and
    under-shifting is likely to produce smaller consumption reductions among these groups`,
    body: [
      `Table 3 displays the number of products in each beverage category and the absolute 
      10
      price per unit over the entire period of analysis (weeks 38 to 178) for the upper bound of
      each quantile (肯) range. It also shows the proportion of off-trade sales for each beverage
      category which occur within different bands of the price distribution, where price distribution
      refers to the range of different unit prices paid for all products falling in one of the four
      beverage categories. The unit prices of cider/RTDs and spirits are the most dispersed of the
      four categories with very low prices at the lower end (肯 = 0.05: 22 pence per unit) of the
      price distribution and very high prices (肯 = 0.95: 104 pence per unit) at the top end. The
      price distributions for beers and wines are much more compacted. A large proportion of
      sales are generated from cheaper products. For instance, 38% of beer sales and 28% of
      cider/RTDs sales are at prices which are in the bottom 5% of the price distribution. Similarly,
      for spirits and wines, approximately 31% and 28% of respective sales are generated from
      products whose prices are in the bottom 15% of the price distribution. 
      Beverage-specific pass through estimates for Model I (across all tax events), are shown in
Figure 2. For all beverage categories there is over-shifting (i.e. pass-through greater than
one) for products in the upper three quartiles of the price distribution. However, for beers,
ciders/RTDs and spirits, there is also under-shifting (i.e. pass-through is less than 1) for
products at the cheapest end of the price distribution. For beers and ciders/RTDs, undershifting is seen for the cheapest 5% of products and for spirits under-shifting extends to the
cheapest 25% of products. For wines, the hypothesis of under-shifting cannot be rejected at
either the 5% or 15% quantile levels. The results suggest tax rises lead to price increases in
the cheapest 5% of products which are 15% lower than full pass-through for beer and spirits
and 11% lower than full pass-through for cider/RTDs. For all beverage categories, the
magnitude of over-shifting increases for higher priced products and over-shifting is
particularly pronounced for wine where, for example, the median priced product sees price
increases 11% larger than would occur with full pass-through. Tabulated quantile regression coefficients obtained from fitting this model together with
their bootstrapped standard errors are presented in Table S1 (supporting material). All
coefficients in the model are significant to at least 1% significance level. Model II estimates separate pass-through rates for duty, VAT and simultaneous duty and
VAT events. Results of this model are presented in Figure S1 and Table S2 (supporting
material). The results show that estimates for duty-specific and VAT-specific events closely
resemble those for the aggregate pass-through in Model I; with spirits followed by beers and
ciders/RTDs having the most pronounced under-shifting and wines being the most overshifted category. For simultaneous VAT and duty events, over-shifting appears to begin
higher in the price distribution than in the aggregate model.
Model III estimates pass-through rates for each duty and VAT change separately and
results are shown in Figure S2 (supporting material). The same pattern of under-shifting
low-priced products and over-shifting high-priced products is seen across all tax events;
however, the magnitude of these effects varies across events. There is more over-shifting
and less under-shifting in later tax events, suggesting variation is related to temporal
processes rather than the size of tax increases. In order to examine the proportion of total sales affected by under- and over-shifting, we
employ off-trade sales volume data and pricing obtained from AC Nielsen for England and
Wales for year 2009. The data capture sales volumes (in litres of pure alcohol) across price
per unit distributions of all four beverage categories in our analysis. The AC Nielsen data on sales volumes across the price distribution allow estimation
of the proportion of products sold which are under-shifted and over-shifted. Linking the
calculated pass-through values (Figure 2, Table S1) together with price and sales volumes
presented in Table 3, it follows that, approximately 68% of beer sales are for under-shifted
products and these are sold for less than 40p per unit. The proportion of products undershifted is smaller but still substantial for spirits (38%) and cider/RTDs (30%).
For beers, approximately 17% of sales are generated from over-shifted products sold
above 50p per unit and 15% of sales are from full pass-through products sold at 40p to 50p.
For ciders/RTDs 65% of sales are from over-shifted products (>26p per unit) with about 5%
of sales fully shifted (22p to 26p). For spirits, approximately 45% of the sales are generated
from over-shifted products (>39p per unit) and 17% from fully passed-through products.
Wines are the most over-shifted category with over 70% of total sales generated from overshifted products and 28% from under-shifted products (<37p per unit) although the
hypothesis of full pass-through cannot be rejected for these products. Sensitivity analysis
We undertook a number of sensitivity analyses which (1) control for alcohol content by
including ABV measure of each product as an explanatory variable, (2) focus on dutyspecific pass-through by deducting VAT from all prices, (3) adjust prices for inflation using
the all-item monthly retail price index smoothed into a weekly index, (4) investigate the
influence of large temporary price promotions on pass-through by 'adjusting' large price
discounts, and (5) fits Model I to different quarters to account for seasonality.
Methodological detail and results for these sensitivity analyses alongside information on
which of Models I to III they were applied to are presented in Figures S3 to S9 and Tables 
13
S3 and S4 (supporting material). In all cases, the findings do not substantively affect our
conclusions from the base case analyses. DISCUSSION
This study provides the most in-depth investigation to date of UK retailers’ pricing
strategies following alcohol tax changes. Using a panel data quantile regression of weekly
pricing data from major supermarkets, we estimate pass-through of excise duty and sales
tax on alcoholic products sold at different price points. Further, we used sales volumes at
different intervals of the price distribution to indicate the proportion of sales of each beverage
type which are under-shifted, fully passed through or over-shifted.
We find evidence of significant heterogeneity in tax pass-through across the price
distribution. In particular, we observe a clear contrast in pass-through for cheap versus
expensive products, with the former being under-shifted and the latter over-shifted. Duty
pass-through ranges from 78% (lower priced beers) to 124% (higher priced cider/RTDs).
This differential pass-through is visible to varying degrees across all beverage categories
and appears to persist for different magnitudes of duty change. In terms of sales volumes,
approximately two-thirds of beers and one third of ciders/RTDs and spirits are under-shifted
while one-sixth of beers, two-thirds of wines and ciders/RTDS and over half of spirits are
over-shifted. By comparing pass-through for a series of tax changes, our results indicate
that retailers may not always apply the same approach and other factors, such as previous
pass-through, wider economic conditions or prices of other products, may be influencing
decisions on the magnitude of pass-through. Beers were under-shifted to the greatest
degree and this may reflect retailers attempting to mitigate the impact of tax increases on a
key product category for promotional activity and pricing competition. In contrast, undershifting of wines was less common, potentially reflecting retailers’ ability to conceal price increases as customers tend to buy different wines at a particular price point rather than
being loyal to specific brands.
The main strengths of the paper lie in the use of quantile regression together with a
longitudinal panel of product-level price transitions which permits a comprehensive
understanding of pass-through for different parts of the price distribution. We also link price
point-specific pass-through estimates to sales volumes which allows quantification of the
proportion of products being under- or over-shifted. An important limitation is our data only
cover four of the UK’s major supermarkets who account for approximately half of UK offtrade alcohol sales (http://www.webcitation.org/6Lf5ICbgG). We have no data on the UK’s
4th largest supermarket chain, Morrison’s, budget supermarket chains such as Aldi and Lidl
and other, often independent, off-trade retailers. The latter in particular sell fewer products
and have less bargaining power with their supply chain than major supermarkets and,
therefore, may have less scope for avoiding full pass-through. As our sales volume data do
capture a wider sample of shops and supermarkets, the derived price/sales distributions are
not a perfect match for our estimates of pass-through. It is difficult to compare our results with previous analyses which have not estimated
pass-through across the price distribution. However, the magnitude of our calculated passthrough values are comparable to those of Baker and Bechling [8] in which beer and wine
were found to be over-shifted and spirits under-shifted. Similarly, our results capture specific
products pass-through estimates presented by Hunt et al. [7].
Our results show tax increases do lead to price increases across the price distribution
and thus support evidence that duty increases are effective in reducing consumption [2];
however, additional measures may be required to ensure such policies are well-targeted.
Heavier drinkers and particularly heavy drinkers with lower incomes are at greatest risk of
harm from their drinking and tend to purchase cheaper alcohol [18]. As duty increases are
not fully passed through to cheaper products, additional price-based interventions such as minimum pricing or restrictions on promotional offers may restrict retailers’ capacities to
engage in price competition on low-cost alcohol. In turn, this may afford policymakers
greater influence over the full price distribution and particularly the lower end which is
associated with harmful drinking.
Beneficial extensions to this work may include investigating the role of other factors such
as package sizes, differential tactics between retailers’ own brands and major brands,
differential strategies between retailers and cross-product pass-through such that wine duty
increases are passed onto beer products. Further data allowing examination of whether
price increases on non-alcoholic products subsidise under-shifting would also be valuable.
These analyses would all require a larger dataset covering a wider range of products. Conclusion
The effectiveness of employing alcohol taxation as a tool for controlling alcohol
consumption is well documented in the literature. However, from a public health perspective,
the success of this intervention relies heavily on the pass-through of duty from retailers to
consumers in the form of increased prices. Our findings demonstrate that, across four
beverage categories, tax increases lead to lower than expected price increases for cheaper
products and higher than expected price increases for more expensive products. In order to
off-set the under-shifting of cheaper products a duty rise could be implemented in
conjunction with other interventions, such as minimum unit pricing. This may maximise
public health benefits by ensuring greater effects on the alcohol disproportionately
purchased by high risk drinkers. `]
  },
]
  
const TRANSCRIPT = [
  '',
  'Person 1: ',
  'Welcome to another addition of the Cradle Nerd podcast! Our first article is: Exchange Rate Pass-Through: Evidence Based on Vector Autoregression with Sign Restrictions. ',
  'Person 1: ',
  'Exchange rate pass-through has been a topic of interest to economists and policymakers for a long time. ',
  'Person 2:',
  "That's right. It's important to understand the degree and timing of exchange rate pass-through to aggregate prices. This is because it affects inflation dynamics and the strength of the expenditure-switching effect. ",
  'Person 1:',
  'The literature on exchange rate pass-through has been growing in the past decade. Studies have used vector autoregression models to analyze the pass-through to import price index, producer price index, and consumer price index. ',
  'Person 2:',
  "That's true. It's interesting to note that a large fraction of imports are intermediate goods used to produce final consumption goods. This is why it's important to consider the prices of imports at different production and distribution stages. ",
  'Person 1:',
  'One of the strong points of this literature is that it provides a unified framework for analyzing exchange rate pass-through. However, there is still much to be done in terms of furthering our understanding of the pass-through. ',
  'Person 2:',
  "Yes, that's true. Going forward, it would be interesting to see more research on the effects of exchange rate pass-through on",
  'Person 1: ',
  'Our last episode for today is Alcohol tax pass-through across the product and price range: do retailers treat cheap alcohol differently?. ',
  'Person 1: ',
  'The article discusses the effectiveness of alcohol taxation as a tool for controlling alcohol consumption.It seems that tax increases lead to lower than expected price increases for cheaper products and higher than expected price increases for more expensive products.',
  'Person 2:',
  "That's right. This could be a problem because it means that the tax increase isn't having the desired effect on controlling alcohol consumption. To make the tax increase more effective, the article suggests implementing it in conjunction with other interventions, such as minimum unit pricing. ",
  'Person 1:',
  'That could be a good solution, as it would ensure that the tax increase has a greater effect on the alcohol disproportionately purchased by high risk drinkers. ',
  'Person 2:',
  'Yes, and it could also help to offset the under-shifting of cheaper products. Overall, it seems like a good idea to combine alcohol taxation with other interventions to maximize public health benefits.. ',
  'Person 1: ',
  "Thanks for listening to this episode of the Cradle Nerd podcast. Please don't forget that the script was fully generated by AI, so take everything we said with a grain of salt. ",
  'Person 2: ',
  "This podcast couldn't have been created without the technologies of OpenAI and play dot H T. Stay tuned until the next episode, and keep on learning!"
].map(str => str.replace(/-/gm, ''))
  const asd = async () => {
    /*for (const articleUrl of urls) {
      console.log(articleUrl)
      const biorxivApiResponse = await fetch (articleUrl.replace('https://www.biorxiv.org/content/', 'https://api.biorxiv.org/details/biorxiv/').replace(/v1$/, ''))
      const biorxivApi = await biorxivApiResponse.json()
      if (biorxivApi.messages[0].status === 'ok' && biorxivApi.collection[0]) {
        const { doi, title, date, category, abstract, jatsxml } = biorxivApi.collection[0]
        try {
          const articleJSONResponse = await fetch(
            'https://us-central1-grounded-garage-377420.cloudfunctions.net/parse_article', 
            { 
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ url: jatsxml })
            }
          )
          const articleJSON = await articleJSONResponse.json()
          articles.push(articleJSON)
        } catch (e) {
          console.warn(e)
        }
      }
    }*/
    // console.log(articles)
    /*const summaryResponses = ARTICLES.map((article) =>  fetch("http://164.90.183.32:5000/openai/summarize", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ articles: [article], prompts: ["Write a podcast transcript of two people are talking about the above article. The two people should discuss the main takeaways, some strong and weak points, and end forward looking. Each person should start speaking on a new line.\nPerson 1:"] })
      })
    )
    console.log('SUMMARY RESPONSES', summaryResponses)
    Promise.all(summaryResponses).then(async (summaryResponses) => {
      const summaries = []
      for (const response of summaryResponses) {
        const json = await response.json()
        console.log(json.body.responses)
        summaries.push(json.body.responses[0].response)
      }
      console.log('summaries', summaries)
      // generate JSON
      const conversation = summaries.map((summary, i) => {
        if (i === 0) {
          return `Person 1: Welcome to another addition of the Cradle Nerd podcast! Our first article is: ${ARTICLES[i].title}. Person 1: ${summary}`
        }
        if (i < summaries.length - 1) {
          return `Person 1: Moving onto our next article, ${ARTICLES[i].title}. Person 1: ${summary}`
        }
        return `Person 1: Our last episode for today is ${ARTICLES[i].title}. Person 1: ${summary}. Person 1: Thanks for listening to this episode of the Cradle Nerd podcast. Please don't forget that the script was fully generated by AI, so take everything we said with a grain of salt. Person 2: This podcast couldn't have been created without the technologies of OpenAI and play dot H T. Stay tuned until the next episode, and keep on learning!`
      }).join('\n').replace(/\n/gm, '').replace(/ANSWER: \d./gm, '').split(/(Person \d+: ?)/gm)
      console.log('conversation', conversation)*/
      const convArray = []
      TRANSCRIPT.forEach((str) => {
        if (str && str.length > 0) {
            if (str.includes('Person')) {
                convArray.push({ voice: str.replace(/:\s*/g, '') })
            } else if (convArray[convArray.length - 1]) {
                convArray[convArray.length - 1].text = str
            }
        }
      })
      const cleanedConv = convArray.filter((entry) => entry.text).map((entry) => ({ text: entry.text.replace(/Person 1/gm, 'Larry').replace(/Person 2/gm, 'Susan'), voice: entry.voice === 'Person 1' ? 'Larry' : 'Susan' }))
  
      console.log('cleanedConv', JSON.stringify(cleanedConv))
      const res = await fetch('https://text-to-speech-6rmz6mmrha-ez.a.run.app', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ body: { conversation: cleanedConv }} )
      })
      console.log(await res.text())
      // return convArray
      /*summaries.body.responses.forEach(async ({ response }) => {
        console.log(response)
        const text = response.replace(/\/n/g, '')
        const mp3URL = await fetch('https://europe-west1-grounded-garage-377420.cloudfunctions.net/text-to-speech', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ text })
        })
        console.log(await mp3URL.text())
      })*/
    //})
  }
  
  asd()